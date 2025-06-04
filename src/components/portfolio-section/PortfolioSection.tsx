import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import PortfolioImage1 from "@/assets/p1.jpg";
import PortfolioImage2 from "@/assets/p2.jpg";
import PortfolioImage3 from "@/assets/p3.jpg";
import PortfolioImage4 from "@/assets/p4.jpg";
import PortfolioImage5 from "@/assets/p5.jpg";
import PortfolioImage6 from "@/assets/p6.jpg";
import Image from "next/image";

/**
 * "Portfolio" section – matches the third mock‑up.
 *  • Left‑aligned multi‑line headline with right‑side description.
 *  • 6 project cards in a responsive grid.
 *  • Cards feature image, arrow overlay, title & description.
 *
 *  Tailwind + Lucide + Framer‑Motion.
 *  Swap image src values with real thumbnails or Next.js <Image> components in production.
 */
export default function PortfolioSection() {
  const projects = [
    {
      img: PortfolioImage1,
      title: "Next‑Gen Fintech App for Secure Transactions",
      desc: "We crafted a sleek and intuitive fintech app, ensuring top‑tier security and effortless financial management.",
    },
    {
      img: PortfolioImage2,
      title: "Revamping E‑Commerce for Higher Conversions",
      desc: "A seamless UI/UX redesign that boosted sales by 40%, improving navigation, checkout, and user engagement",
    },
    {
      img: PortfolioImage3,
      title: "Innovative Learning Platform for Digital Education",
      desc: "We transformed online learning with an intuitive dashboard, interactive features, and gamification elements",
    },
    {
      img: PortfolioImage4,
      title: "High‑Performance Website for a Leading Tech Company",
      desc: "A lightning‑fast, SEO‑optimized website designed to enhance user experience and drive organic traffic",
    },
    {
      img: PortfolioImage5,
      title: "AI‑Powered Marketing Dashboard for Data‑Driven Decisions",
      desc: "A real‑time analytics dashboard integrating AI to help brands make smarter marketing decisions.",
    },
    {
      img: PortfolioImage6,
      title: "Immersive Brand Identity for a Global SaaS Startup",
      desc: "A complete brand overhaul with modern visuals and a compelling UI to strengthen online presence and credibility",
    },
  ];

  return (
    <section className="relative w-full flex justify-center overflow-hidden bg-gradient-to-br from-[#001E3680] via-[#001E3680] to-[#001E3680] py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Headline Row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <div className="group relative flex items-center justify-center rounded-full px-6 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out">
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
                Portfolio
              </AnimatedGradientText>
            </div>
            <h1 className="text-7xl font-medium max-w-lg leading-[1.25] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/70 bg-clip-text text-transparent">
              See Our Creative Impact
            </h1>
          </div>
          <p className="text-lg font-extralight leading-relaxed text-slate-300 max-w-xl">
            Our portfolio reflects the perfect blend of creativity and strategy.
            We don't just design visually stunning experiences—we create
            solutions that drive engagement and conversions.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <PortfolioCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectProps {
  img: any;
  title: string;
  desc: string;
  index: number;
}

function PortfolioCard({ img, title, desc, index }: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-[6px] shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={img}
          alt="Project thumbnail"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <span className="grid h-12 w-12 place-items-center group rounded-full bg-primary/80 backdrop-blur-md cursor-pointer hover:bg-primary/90">
            <ArrowUpRight
              size={24}
              strokeWidth={1.5}
              className="text-white group-hover:text-cyan-500 transition-colors duration-200"
            />
          </span>
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-normal leading-snug text-white">{title}</h3>
        <p className="text-slate-300 leading-relaxed text-base">{desc}</p>
      </div>
    </motion.article>
  );
}
