"use client";

import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-[#5B5D7A] text-white font-mono px-16 py-12 rounded-xl">
      <div className="text-lg whitespace-pre-wrap">
        {`> Jason.currentLocation`}
        <br />
        <span className="text-[#E3CE84]">&quot;Fort Lee, NJ&quot;</span>
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
          &quot;22jasonlei@gmail.com&quot;
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/leijason/"
          className="text-[#35FEFF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;LinkedIn&quot;
        </a>
        ,{" "}
        <a
          href="https://github.com/leijason22"
          className="text-[#35FEFF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;GitHub&quot;
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
          &quot;jasonlei.pdf&quot;
        </a>
        <br />
        <br />
        {`> Jason.interests`}
        <br />
        <span className="text-[#E3CE84]">
          [&quot;web design&quot;, &quot;smiskis&quot;, &quot;eating&quot;, &quot;long walks&quot;, &quot;lifting heavy weights &amp; placing them back down gently&quot;]
        </span>
        <br />
        <br />
        {`> Jason.education`}
        <br />
        <span className="text-[#E3CE84]">
          &quot;B.Sc. Computer Science @ Rutgers University - New Brunswick&quot;
        </span>
        <br />
        <br />
        {`> Jason.skills`}
        <br />
        <span className="text-[#E3CE84]">
          [&quot;Python&quot;, &quot;Java&quot;, &quot;C&quot;, &quot;JavaScript&quot;, &quot;React&quot;, &quot;HTML&quot;, &quot;CSS&quot;, &quot;SQL - Postgres &amp; MySQL&quot;, &quot;Git&quot;]
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
