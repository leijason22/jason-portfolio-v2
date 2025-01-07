"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-end bg-[#F7F9FC] text-[#515F7F] px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-[#747FE0]">Contact me!</h2>

      <div className="w-12 h-1 bg-[#747FE0] mb-6"></div>

      <div className="flex space-x-6 text-lg">
        <a
          href="mailto:22jasonlei@gmail.com"
          className="hover:text-[#747FE0]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/leijason/"
          className="hover:text-[#747FE0]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>

        <a
          href="https://www.github.com/leijason22"
          className="hover:text-[#747FE0]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
