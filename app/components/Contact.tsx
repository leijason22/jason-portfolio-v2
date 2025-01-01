"use client";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F9FC] text-[#515F7F] px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-[#747FE0]">Contact me!</h2>

      <div className="w-12 h-1 bg-[#747FE0] mb-6"></div>

      <div className="flex space-x-6 text-lg">
        <a
          href="mailto:22jasonlei@gmail.com"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          22jasonlei@gmail.com
        </a>

        <span>||</span>

        <a
          href="https://www.linkedin.com/in/leijason/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <span>||</span>

        <a
          href="https://www.github.com/leijason22"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
