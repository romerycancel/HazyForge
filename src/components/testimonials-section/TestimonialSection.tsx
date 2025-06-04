import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";

const ReviewCard = ({
  img,
  name,
  role,
  body,
}: {
  img: string;
  name: string;
  role: string;
  body: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-100 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="60" height="60" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium text-white">
            {name}
          </figcaption>
          <p className="text-base font-medium text-sky-500">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </div>
  );
};

export default function TestimonialSection() {
  const reviews = [
    {
      name: "Jack",
      role: "Project Manager at Google",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      img: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jack",
    },
    {
      name: "Jill",
      role: "UX / UI Designer at Facebook",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      img: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jill",
    },
    {
      name: "John",
      role: "UX Engineer at Pinterest",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      img: "https://api.dicebear.com/9.x/adventurer/svg?seed=John",
    },
    {
      name: "Jane",
      role: "Lead UX Writer at Line",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      img: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jane",
    },
    {
      name: "Jenny",
      role: "Engineer at Spotify",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      img: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jenny",
    },
    {
      name: "James",
      role: "Project Manager at Facebook",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      img: "https://api.dicebear.com/9.x/adventurer/svg?seed=James",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="relative w-full flex justify-center overflow-hidden bg-gradient-to-br from-[#001E3680] via-[#001E3680] to-[#001E3680] py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Headline Row */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
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
                Testimonials
              </AnimatedGradientText>
            </div>
            <h1 className="text-7xl font-medium max-w-3xl leading-[1.25] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/70 bg-clip-text text-transparent">
              See Why Clients Love Working With Us
            </h1>
          </div>
          <p className="text-lg font-extralight leading-relaxed text-slate-300 max-w-xl">
            We take pride in delivering outstanding results. See how our work
            has made a difference for our clients!
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.role} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.role} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
}
