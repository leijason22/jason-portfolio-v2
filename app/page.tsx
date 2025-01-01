import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";

// about, experience, projects, courses, skills, other

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Include Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-8">
        {/* About Section */}
        <section id="about" className="py-16">
          <About />
        </section>

        {/* Experience Section */}
        <Experience />

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>This is the Projects section of the portfolio.</p>
        </section>

        <section id="courses" className="py-16">
          <h2 className="text-3xl font-bold mb-4">Courses</h2>
          <p>This is the Courses section of the portfolio.</p>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p>This is the Skills section of the portfolio.</p>
        </section>

        <section id="other" className="py-16">
          <h2 className="text-3xl font-bold mb-4">Other</h2>
          <p>This is the Other section of the portfolio.</p>
        </section>
      </main>
    </div>
  );
}
