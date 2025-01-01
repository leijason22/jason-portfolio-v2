"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function InitialHome() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F9FC] p-8">
      <h1 className="text-8xl font-bold text-[#747FE0]">
        <TypeAnimation
          sequence={["hi.", 2000, "i'm jason."]}
          wrapper="span"
          cursor={false}
          repeat={0}
        />
      </h1>
      <h2 className="text-6xl font-medium text-[#515F7F] mt-4">
        <TypeAnimation
          sequence={[4000, "here's a bit about me:"]}
          wrapper="span"
          cursor={false}
          repeat={0}
        />
      </h2>
      <div className="text-4xl font-light text-[#515F7F] mt-4">
        <TypeAnimation
          sequence={[
            7000,
            "i'm a web developer.",
            2000,
            "i'm a software engineer.",
            2000,
            "i'm a problem solver.",
            2000,
            "i'm an avid smiski fan.",
            2000,
            "i'm a huge foodie.",
            2000,
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
