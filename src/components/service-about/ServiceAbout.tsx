import {
  BarChart2,
  Code,
  Search,
  Palette,
  Cloud,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

/**
 * "Services" section – matches the second screenshot.
 * Center-aligned badge, headline, subtitle, followed by a 6-card grid.
 * Tailwind + Lucide + Framer-motion.
 */
export default function ServiceAbout() {
  const services = [
    {
      icon: BarChart2,
      title: "Analytics Data",
      desc: `Gain deep insights into your business with real-time data analysis. Track performance, user behavior and key metrics`,
    },
    {
      icon: Code,
      title: "Development",
      desc: `From front-end to back-end, we build scalable, high-performance applications tailored to your business needs`,
    },
    {
      icon: Search,
      title: "SEO Optimization",
      desc: `Enhance your online visibility with data-driven SEO strategies. Improve rankings, drive organic and traffic`,
    },
    {
      icon: Palette,
      title: "Branding",
      desc: `Create a strong, memorable identity with our branding solutions to messaging, we help establish a unique presence in your industry.`,
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      desc: `Leverage the power of the cloud for scalability, security, and efficiency. Migrate, manage, and optimize your cloud`,
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      desc: `Boost engagement and conversions with our tailored digital marketing strategies. We optimize campaigns across`,
    },
  ];

  return (
    <section className="relative w-full flex justify-center overflow-hidden bg-gradient-to-br from-[#13041d] via-[#09192e] to-[#0a182d] py-20 text-white">
      <div className="container px-4 text-center">
        {/* Badge */}
        <span className="inline-block rounded-full bg-white/5 px-4 py-1 text-sm font-medium tracking-wide text-slate-300 ring-1 ring-inset ring-white/10 backdrop-blur-[3px]">
          Service
        </span>

        {/* Headline */}
        <h2 className="mt-6 text-4xl/[1.1] sm:text-5xl md:text-6xl font-semibold">
          Transforming Ideas into
          <span className="block text-slate-300">Digital Excellence</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          We blend creativity, technology, and strategy to deliver powerful
          digital solutions that elevate brands, engage audiences, and drive
          results
        </p>

        {/* Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
  index: number;
}

function ServiceCard({ icon: Icon, title, desc, index }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-[6px] shadow-lg text-center"
    >
      <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{desc}</p>
    </motion.article>
  );
}
