// million-ignore

"use client";

import { Button } from "@cap/ui";
import { useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";

export const HomePage = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-32 wrapper overflow-y-hidden">
      <div className="mb-14 text-center page-intro">
        <div className="flex justify-center mb-8">
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" fill="#8B5CF6"/>
            <text x="70" y="42" fill="currentColor" className="text-4xl font-bold">OPAVC</text>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">About OPAVC</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          OPAVC is an open-source screen recording tool built for everyone. Our mission is to make screen recording accessible, private, and powerful.
        </p>
      </div>
      <div className="mt-[120px]">
        <div className="relative z-10 px-5 pt-24 pb-36 w-full">
          <div className="mx-auto text-center wrapper wrapper-sm">
            <h1 className="fade-in-down text-[2rem] font-bold leading-[2.5rem] md:text-[3.75rem] md:leading-[4rem] relative z-10 text-black mb-4">
              About OPAVC
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-md sm:text-xl text-zinc-500 fade-in-down animate-delay-1">
              Screen recording made simple, secure, and powerful. OPAVC gives you
              full control over your recordings with a focus on privacy and ease
              of use.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-5 space-y-2 fade-in-up animate-delay-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <Button
              variant="white"
              href="#video"
              size="lg"
              className="flex justify-center items-center w-full font-medium text-md sm:w-auto"
              onClick={(e) => handleSmoothScroll(e, "video")}
            >
              See it in Action
            </Button>
            <Button
              variant="radialblue"
              href="/download"
              size="lg"
              className="relative z-[20] w-full font-medium text-md sm:w-auto"
            >
              Download OPAVC
            </Button>
          </div>
          <img
            src="/illustrations/mask-big-recorder.webp"
            alt="About Background"
            className="absolute top-0 left-0 z-0 -mt-40 w-full h-auto pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};
