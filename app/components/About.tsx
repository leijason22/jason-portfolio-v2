"use client";

import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-[#5B5D7A] text-white font-mono px-16 py-12 rounded-xl">
      <div className="text-lg whitespace-pre-wrap">
        {`> Jason.currentLocation`}
        <br />
        <span className="text-[#E3CE84]">{'"Fort Lee, NJ"'}</span>
        <br />
        <br />
        {`> Jason.contactInfo`}
        <br />[
        <a
          href="mailto:22jasonlei@gmail.com"
          className="text-[#35FEFF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          "22jasonlei@gmail.com"
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/leijason/"
          className="text-[#35FEFF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          "LinkedIn"
        </a>
        ,{" "}
        <a
          href="https://github.com/leijason22"
          className="text-[#35FEFF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          "GitHub"
        </a>
        ]
        <br />
        <br />
        {`> Jason.resume`}
        <br />
        <a
          href="/documents/jasonlei.pdf"
          className="text-[#35FEFF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          "jasonlei.pdf"
        </a>
        <br />
        <br />
        {`> Jason.interests`}
        <br />
        <span className="text-[#E3CE84]">
          ["web design", "smiskis", "eating", "long walks", "lifting heavy
          weights & placing them back down gently"]
        </span>
        <br />
        <br />
        {`> Jason.education`}
        <br />
        <span className="text-[#E3CE84]">
          "B.Sc. Computer Science @ Rutgers University - New Brunswick"
        </span>
        <br />
        <br />
        {`> Jason.skills`}
        <br />
        <span className="text-[#E3CE84]">
          ["Python", "Java", "C", "JavaScript", "React", "HTML", "CSS", "SQL -
          Postgres & MySQL", "Git"]
        </span>
        <br />
        <br />
        {/* Type Animation with Cursor */}
        <div className="text-white">
          {`> `}
          <TypeAnimation
            sequence={["", 1000]} // Keep it blank and static
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}
