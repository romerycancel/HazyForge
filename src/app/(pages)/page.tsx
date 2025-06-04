

"use client";

import BlogSection from "@/components/blog/BlogSection";
import CornerGlows from "@/components/corner-glows/CornerGlows";
import MousePositionTracker from "@/components/get-mouse-coords/useGetMouseCoords";
import HeroSection from "@/components/hero-section/HeroSection";
import InfoSection from "@/components/info-section/InfoSection";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Globe } from "@/components/magicui/globe";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
import ServiceAbout from "@/components/service-about/ServiceAbout";
import TestimonialSection from "@/components/testimonials-section/TestimonialSection";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ShaderMaterial, TextureLoader } from "three";

const funkyShader = {
  vertexShader: `
      varying vec2 vUV;
      void main() {
        vUV = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  fragmentShader: `
      uniform sampler2D uTexture;
      uniform float uHueShift; // 0.0 - 1.0
      uniform float uTime;
      varying vec2 vUV;
  
      vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs((q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
      }
  
      vec3 hsv2rgb(vec3 c) {
        vec3 p = abs(fract(c.x + vec3(0.0, 1.0/3.0, 2.0/3.0)) * 6.0 - 3.0);
        return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
      }
  
      void main() {
        vec4 texColor = texture2D(uTexture, vUV);
        vec3 hsv = rgb2hsv(texColor.rgb);
        hsv.x = mod(hsv.x + uHueShift, 1.0); // shift hue
        float animatedSaturation = (sin(uHueShift * 10.0) + 1.0) / 2.0;
        hsv.y = animatedSaturation; 
        vec3 rgb = hsv2rgb(hsv);
        gl_FragColor = vec4(rgb, texColor.a);
      }
    `,
};

async function getMaterial() {
  const texture = await new TextureLoader().loadAsync(
    "/images/earth-day-funky.jpg"
  );
  const material = new ShaderMaterial({
    vertexShader: funkyShader.vertexShader,
    fragmentShader: funkyShader.fragmentShader,
    uniforms: {
      uHueShift: { value: 0.0 },
      uTexture: { value: texture },
    },
  });
  return material;
}

export default function Home() {
  const [material, setMaterial] = useState<ShaderMaterial | null>(null);

  useEffect(() => {
    getMaterial().then(setMaterial);
  }, []);

  if (!material) return null;
  return (
    <main className="bg-black text-white flex flex-col items-center">
      <CornerGlows />
      <section className="flex flex-col justify-center items-center text-center w-full py-10">
        <div className="flex flex-col">
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-6 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <AnimatedGradientText className="text-lg font-medium" speed={1}>
              Introduction
            </AnimatedGradientText>
          </div>
          <h1 className="text-7xl font-medium max-w-5xl leading-[1.5] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/70 bg-clip-text text-center text-transparent">
            Transforming Ideas into Stunning Digital Experiences
          </h1>
        </div>
        <p className="text-lg font-thin max-w-4xl text-gray-300 mt-8">
          We create sleek, user-friendly, and visually stunning digital products
          that enhance user engagement. Let&apos;s build something remarkable
          together.
        </p>
        <div className="flex gap-4 space-x-4 mt-8">
          <button className="group relative px-6 py-2 border border-sky-500 text-white text-base rounded-full cursor-pointer overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="relative z-10">Learn More</span>
          </button>
          <button className="group relative flex gap-2 items-center px-6 py-2 border border-sky-500 text-white text-base rounded-full cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Talk <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
        <div
          id="globe"
          className="relative w-full max-w-3xl h-[32rem] flex justify-center items-center mt-12"
        >
          <Globe
            className="w-[28rem] h-[28rem]"
            
          />
          <MousePositionTracker
            onMouseMoveRatio={(ratio) => {
              material.uniforms.uHueShift.value = ratio;
            }}
          />
        </div>
        <div className="flex justify-center w-full max-w-5xl gap-20 px-10 py-4 mt-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-[6px] shadow-lg">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-normal">150+</div>
            <div className="text-base font-normal text-slate-300">
              Successful Project
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-normal">20+</div>
            <div className="text-base font-normal text-slate-300">
              Expert Teams
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-normal">50+</div>
            <div className="text-base font-normal text-slate-300">
              Happy Client
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-normal">10+</div>
            <div className="text-base font-normal text-slate-300">
              Years of Experience
            </div>
          </div>
        </div>
      </section>
      <InfoSection />
      <ServiceAbout />
      <PortfolioSection />
      <TestimonialSection />
      <BlogSection />
      <HeroSection />
      <footer className="p-6 text-center">
        <p>
          150+ Successful Projects | 20+ Expert Team | 50+ Happy Clients | Years
          of Experience
        </p>
      </footer>
    </main>
  );
}