import Map from "@/assets/map.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center overflow-hidden bg-[#0a182d] py-20 text-white">
      <div className="container p-20 flex flex-col gap-6 items-center mx-auto rounded-[56px] bg-gradient-to-tl from-[#13041d] via-[#09192e] to-[#1f4573] relative">
        <Image
          src={Map}
          alt="World Map"
          fill
          className="object-cover rounded-[56px] opacity-3 pointer-events-none z-0"
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Headline Row */}
        <div className="flex flex-col items-center text-center gap-6 relative z-10">
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
                Contact
              </AnimatedGradientText>
            </div>
            <h1 className="text-7xl font-medium max-w-3xl leading-[1.25] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/70 bg-clip-text text-transparent">
              Let&apos;s Talk About Your Next Big Idea
            </h1>
          </div>
          <p className="text-lg font-extralight leading-relaxed text-slate-300 max-w-xl">
            We love working with ambitious brands. Drop us a message, and let&apos;s
            turn your ideas into reality.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 max-w-3xl z-10">
          <div className="flex gap-6">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </div>
          <div className="flex w-full items-center gap-6">
            <Input type="email" placeholder="Email" />
            <Button
              type="submit"
              className="bg-sky-500 hover:bg-sky-700 duration-200 cursor-pointer"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
