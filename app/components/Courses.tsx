"use client";

export default function Courses() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-[#5B5D7A] text-white font-mono px-16 py-12 rounded-xl">
      <div className="text-lg whitespace-pre-wrap">
        {`> Jason.courses`}
        <br />
        <span className="text-[#E3CE84]">
          [ &quot;Data Structures&quot;,
          <br />
          &quot;Computer Architecture&quot;,
          <br />
          &quot;Systems Programming&quot;,
          <br />
          &quot;Design and Analysis of Computer Algorithms&quot;,
          <br />
          &quot;Software Methodology&quot;,
          <br />
          &quot;Introduction to Data Science&quot;,
          <br />
          &quot;Principles of Information and Data Management&quot;,
          <br />
          &quot;Discrete Structures&quot;,
          <br />
          &quot;Principles of Programming Languages&quot; ]
        </span>
      </div>
    </div>
  );
}
