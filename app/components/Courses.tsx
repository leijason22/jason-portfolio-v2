"use client";

export default function Courses() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-[#5B5D7A] text-white font-mono px-16 py-12 rounded-xl">
      <div className="text-lg whitespace-pre-wrap">
        {`> Jason.courses`}
        <br />
        <span className="text-[#E3CE84]">
          [ "Data Structures",
          <br></br>
          "Computer Architecture",
          <br></br>
          "Systems Programming",
          <br></br>
          "Design and Analysis of Computer Algorithms",
          <br></br>
          "Software Methodology",
          <br></br>
          "Introduction to Data Science",
          <br></br>
          "Principles of Information and Data Management",
          <br></br>
          "Discrete Structures",
          <br></br>
          "Principles of Programming Languages" ]
        </span>
      </div>
    </div>
  );
}
