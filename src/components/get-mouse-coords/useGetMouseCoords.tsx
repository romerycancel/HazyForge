'use client';
import React, { useEffect, useCallback, useRef } from "react";

interface MousePositionTrackerProps {
  /**
   * Callback function that receives the lagged mouse X position as a ratio (0 to 1)
   * relative to the window width whenever the mouse moves or the lag catches up.
   */
  onMouseMoveRatio: (ratio: number) => void;
}

/**
 * A component that tracks the mouse X position relative to the window width,
 * applies a smooth lag effect, and calls the `onMouseMoveRatio` callback
 * with the calculated lagged ratio. The lag ensures the reported value
 * smoothly catches up to the actual mouse position when the mouse stops.
 * This component does not render anything itself.
 */
export default function MousePositionTracker({ onMouseMoveRatio }: MousePositionTrackerProps) {
  // Refs to store the target (actual mouse position) and current (lagging) ratios
  const targetRatioRef = useRef(0.5); // Initialize at center
  const currentRatioRef = useRef(0.5);
  // Ref to store the requestAnimationFrame ID
  const animationFrameRef = useRef<number | null>(null);
  // Ref to store the latest callback function to avoid dependency issues
  const onMouseMoveRatioRef = useRef(onMouseMoveRatio);

  // Constants for the lag effect
  const smoothingFactor = 0.055; // Lower value = more lag, higher value = less lag
  const stopThreshold = 0.0001; // Threshold to stop animation when close enough

  // Update the callback ref if the prop changes
  useEffect(() => {
    onMouseMoveRatioRef.current = onMouseMoveRatio;
  }, [onMouseMoveRatio]);

  // The animation loop function using requestAnimationFrame
  const animationLoop = useCallback(() => {
    const target = targetRatioRef.current;
    let current = currentRatioRef.current;
    const diff = target - current;

    // If the difference is negligible, stop the animation loop
    if (Math.abs(diff) < stopThreshold) {
      // Ensure the final value is exactly the target
      if (current !== target) {
        currentRatioRef.current = target;
        onMouseMoveRatioRef.current(target);
      }
      animationFrameRef.current = null; // Clear the animation frame ID
      return; // Stop the loop
    }

    // Apply linear interpolation (lerp) for the smooth lag effect
    // This creates an ease-out effect, approaching the target smoothly
    current += diff * smoothingFactor;
    currentRatioRef.current = current;

    // Call the provided callback with the current lagged ratio
    onMouseMoveRatioRef.current(current);

    // Request the next frame to continue the animation
    animationFrameRef.current = requestAnimationFrame(animationLoop);
  }, [smoothingFactor, stopThreshold]); // Dependencies for the loop logic

  // Function to start the animation loop if it's not already running
  const startAnimationLoop = useCallback(() => {
    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    }
  }, [animationLoop]);

  // Event handler for mouse movement
  const handleMouseMove = useCallback((event: MouseEvent) => {
    // Calculate the raw ratio of mouse X position to the window width
    const rawRatio = event.clientX / window.innerWidth;
    // Clamp the value between 0 and 1 and update the target ratio
    targetRatioRef.current = Math.max(0, Math.min(1, rawRatio));
    // Ensure the animation loop is running to update the lagged position
    startAnimationLoop();
  }, [startAnimationLoop]); // Dependency: startAnimationLoop

  // Effect to set up and clean up the event listener and animation frame
  useEffect(() => {
    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      // Remove the event listener
      window.removeEventListener('mousemove', handleMouseMove);
      // Cancel any ongoing animation frame to prevent memory leaks
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [handleMouseMove]); // Effect depends on the memoized handleMouseMove

  // This component does not render anything to the DOM
  return null;
}