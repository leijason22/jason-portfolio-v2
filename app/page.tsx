import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import InitialHome from "./components/InitialHome";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

const projects = [
  {
    title: "Movie Recommendation System",
    description:
      "Travel smarter by saving the places you want to go. This project was an assignment given for an interview. It includes a map with pins and a list of locations with interactivity between the two.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux"],
    sourceCode: "#",
    image: "/images/project1.png",
  },
  {
    title: "Nicotine Trend Analysis",
    description:
      "Travel smarter by saving the places you want to go. This project was an assignment given for an interview. It includes a map with pins and a list of locations with interactivity between the two.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux"],
    sourceCode: "#",
    image: "/images/project1.png",
  },
  {
    title: "BuyMe Auction Site",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "MyShell",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "Spellchecker",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "MyMalloc",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "RU Pizzeria - Android App",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "First Portfolio Website",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "Sillybus",
    description:
      "Built a responsive portfolio website using React and Tailwind CSS to showcase my projects, skills, and contact details.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Header />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-8">
        {/* Initial Home Section */}
        <section id="initialhome" className="py-16">
          <InitialHome />
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#747FE0]">
            About Me!
          </h2>
          <About />
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#747FE0]">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Courses Sections */}
        <section id="courses" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#747FE0]">
            Coursework
          </h2>
          <Courses />
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#747FE0]">Skills</h2>
          <p>This is the Skills section of the portfolio.</p>
        </section>

        <section id="contact" className="py-16">
          <Contact />
          <footer className="mt-12 text-center text-sm text-[#4A4A6A]">
            Jason Lei © 2025
          </footer>
        </section>
      </main>
    </div>
  );
}
