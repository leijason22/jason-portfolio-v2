"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to indicate that we're on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Prevent rendering on the server to avoid hydration issues
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* First Line */}
      <h1 className="text-4xl font-bold text-black">
        <TypeAnimation
          sequence={[
            "hi.", 
            1000, 
            "i'm jason.",
          ]}
          wrapper="span"
          cursor={false} // stop the cursor after typing
          repeat={0}
        />
      </h1>

      {/* Second Line */}
      <h2 className="text-2xl font-medium text-gray-600 mt-4">
        <TypeAnimation
          sequence={[
            3000, 
            "here's a bit about me:", 
          ]}
          wrapper="span"
          cursor={false} 
          repeat={0}
        />
      </h2>

      {/* Typing Animation for Paragraphs
      <div className="max-w-3xl text-lg text-gray-600 leading-relaxed mt-8 space-y-4">
        <TypeAnimation
          sequence={[
            5000, 
            "I'm a dynamic software engineer and recent graduate with a BS in Computer Science at Rutgers University.",
            3000, 
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            9000, 
            "I entered college as a pharmacy major but soon fell in love with computer systems, algorithms, modern algebra, and all of the intriguing ways they converge.",
            2000, 
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            14000, 
            "My current interests lie in data science, full-stack web development, and software engineering.",
            2000,
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            18000, 
            "Here's my Resume.",
            2000,
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            22000, 
            "I am also planning to continue my education by pursuing a master's degree in computer science!",
            2000, 
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            26000, 
            "Before graduating this fall, I took:",
            1000, 
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            28000, 
            "• Introduction to Data Science (CS439)",
            1000, 
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            30000, 
            "• Principles of Programming Languages (CS314)",
            1000, 
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            32000, 
            "• Design and Analysis of Computer Algorithms (CS344)",
          ]}
          wrapper="p"
          cursor={false}
          repeat={0}
        />
      </div> */}

{/* Typing Animation for Paragraphs */}
<div className="max-w-3xl text-lg text-gray-600 leading-relaxed mt-8 space-y-4">
  <TypeAnimation
    sequence={[
      5000, // Delay before typing starts
      `I'm a dynamic software engineer and recent graduate with a BS in Computer Science at Rutgers University. 
      I entered college as a pharmacy major but soon fell in love with computer systems, algorithms, modern algebra, and all of the intriguing ways they converge. 
      My current interests lie in data science, full-stack web development, and software engineering. 
      Here's my Resume. 
      I am also planning to continue my education by pursuing a master's degree in computer science! 
      Before graduating this fall, I took: 
      • Introduction to Data Science (CS439) 
      • Principles of Programming Languages (CS314) 
      • Design and Analysis of Computer Algorithms (CS344)`,
      3000, // Pause after typing
    ]}
    wrapper="p"
    cursor={false}
    repeat={0}
  />
</div>


    </div>
  );
}
