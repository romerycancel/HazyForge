import {
  Target,
  Zap,
  Users,
  Goal,
  CalendarHeart,
  ZapIcon,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "../mission-card/MissionCard";
import { Ripple } from "../magicui/ripple";

export default function InfoSection() {
  const features = [
    {
      Icon: Target,
      name: "Our Missions",
      description:
        "We are driven by innovation and creativity, constantly seeking new ways to overcome challenges and unlock opportunities in the digital landscape",
      href: "#",
      cta: "See more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Ripple className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: Zap,
      name: "Our Value",
      description:
        "We value transparency, fostering open communication and clear expectations. Our commitment lies in delivering exceptional results and tailored solutions",
      href: "#",
      cta: "See more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Ripple className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: Users,
      name: "Our Teams",
      description:
        "Meet the brilliant minds behind our success— a diverse team of talent, experience, and expertise, collaborating to craft exceptional digital solutions",
      href: "#",
      cta: "See more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Ripple className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#001E3680] via-[#001E3680] to-[#001E3680] py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Headline & Tagline */}

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
                About
              </AnimatedGradientText>
            </div>
            <h1 className="text-7xl font-medium max-w-xl leading-[1.25] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/70 bg-clip-text text-transparent">
              Your Vision, Our Digital Expertise
            </h1>
          </div>
          <p className="text-lg font-extralight leading-relaxed text-slate-300 max-w-xl">
            We bring your ideas to life through cutting‑edge design, seamless
            development, and powerful marketing strategies
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16">
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>

        {/* Meta */}
        <div className="flex gap-16 mt-12">
          <div className="flex flex-col">
            <div className="font-thin text-base text-slate-300">Based On</div>
            <h1 className="text-2xl font-semibold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Canada, USA
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-base text-slate-300">From</div>
            <h1 className="text-2xl font-semibold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              2015 - Present
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-[6px] shadow-lg"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="leading-relaxed text-slate-300">{children}</p>
    </motion.article>
  );
}

interface MetaProps {
  label: string;
  value: string;
}

function Meta({ label, value }: MetaProps) {
  return (
    <div>
      <span className="text-sm uppercase tracking-wider">{label}</span>
      <p className="mt-1 text-xl font-medium text-white">{value}</p>
    </div>
  );
}
