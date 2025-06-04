"use client";
import { useThemeStore } from "@/providers/zustand-provider";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ContentAnimation = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const themeConfig = useThemeStore((s) => s.themeConfig);
  const [animation, setAnimation] = useState(themeConfig.animation);

  useEffect(() => {
    setAnimation(themeConfig.animation);
  }, [themeConfig.animation]);

  useEffect(() => {
    setAnimation(themeConfig.animation);
    setTimeout(() => {
      setAnimation("");
    }, 1100);
  }, [pathname]);
  return (
    <>
      {/* BEGIN CONTENT AREA */}
      <div className={`${animation} animate__animated`}>{children}</div>
      {/* END CONTENT AREA */}
    </>
  );
};

export default ContentAnimation;
