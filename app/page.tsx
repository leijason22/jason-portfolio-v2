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
      "This project involved developing a user-based recommendation system using collaborative filtering techniques, including matrix factorization and cosine similarity, to predict user preferences. I preprocessed and cleaned large-scale e-commerce datasets, dividing them into training and testing subsets for accurate model validation. Key metrics like MAE, RMSE, precision, recall, and NDCG were used to evaluate and optimize the algorithm for scalability and accuracy, enhancing my understanding of machine learning and data analysis.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    sourceCode: "https://github.com/leijason22/Movie-Recommendation-System",
    image: "/images/project1.png",
  },
  {
    title: "Nicotine Trend Analysis",
    description:
      "This project was a deep dive into analyzing nicotine addiction trends, particularly the 25% increase in teenage addiction rates. It was my first time using Beautiful Soup for web scraping, which helped me extract data from various sources in JSON and CSV formats. I also learned how to automate processes by writing Python scripts for data retrieval and integration. This experience also introduced me to tools like MySQL, Jupyter Notebooks, and PyCharm, enhancing my workflow and technical skill set.",
    skills: ["Python", "MySQL", "Beautiful Soup", "Jupyter Notebooks"],
    sourceCode: "https://github.com/leijason22/NicotineTrends2",
    image: "/images/project1.png",
  },
  {
    title: "BuyMe Auction Site",
    description:
      "This project was an incredible learning experience in leading a team to build a local auction platform hosted on a Tomcat server. It allowed me to enhance my skills in Java, JavaScript, HTML, MySQL, and JDBC while implementing key features like auto-bidding and inventory management. One of the most rewarding aspects was optimizing search algorithms for buyers, which reduced search times by 25%. This project not only strengthened my technical knowledge but also helped me develop leadership skills by managing a team and ensuring the project stayed on track.",
    skills: ["Java", "JavaScript", "HTML", "MySQL", "JDBC", "Tomcat"],
    sourceCode: "https://github.com/leijason22/BuyMeSite",
    image: "/images/project2.png",
  },
  {
    title: "MyShell",
    description:
      "This project was an exciting journey into systems programming, where I developed a Unix-inspired shell from scratch. It features interactive prompts, batch mode functionality, and robust command parsing for user input. I implemented process creation and management using fork and exec, enabling the execution of external commands with pipelines. Additionally, I engineered advanced functionality like wildcard expansion, error handling, and file redirection using dup2 to optimize system performance. This project deepened my understanding of low-level programming in C and POSIX standards, while also teaching me the importance of error handling and system optimization.",
    skills: ["C", "Linux", "POSIX", "Makefiles", "Git"],
    sourceCode: "https://github.com/leijason22/CS214-MyShell",
    image: "/images/project2.png",
  },
  {
    title: "Spellchecker",
    description:
      "This project involved building a custom spell-checking program to traverse directories, read text files, and check spelling using a dictionary file. It featured robust handling of punctuation, capitalization, and special cases like hyphenated words and possessives. The program recursively finds and processes `.txt` files while skipping hidden directories, implements logic to handle edge cases such as trailing punctuation and capitalization variations, and accurately identifies misspelled words with their positions in the file. This project sharpened my skills in C, file I/O, and error handling while implementing efficient algorithms for text processing.",
    skills: ["C", "File I/O", "Error Handling", "Algorithms"],
    sourceCode: "https://github.com/leijason22/CS214-Spellchecker",
    image: "/images/project2.png",
  },
  {
    title: "MyMalloc",
    description:
      "This project was a fascinating challenge where I built a custom implementation of the system’s `malloc` and `free` functions using pointers and type casting. By managing memory allocation within a large 4096-byte array, I learned how to implement functions and headers to track memory usage effectively. I created unit, correctness, and performance test cases to ensure reliability and efficiency. A key highlight was implementing leak detection to identify how many bytes were still leaked into objects, which deepened my understanding of memory management. Additionally, I used Makefiles to simplify the compilation process, further streamlining the development workflow.",
    skills: ["C", "Memory Management", "Pointers", "Makefiles", "Debugging"],
    sourceCode: "#",
    image: "/images/project2.png",
  },
  {
    title: "RU Pizzeria - Android App",
    description:
      "This Android app was a comprehensive project for pizza ordering, built using Android Studio, Java, and XML. It allowed users to select specialty pizzas or customize their own with up to 7 toppings. I implemented design patterns like Singleton for efficient global data sharing and Factory Method for flexible object creation. This project taught me Android development, GUI design, and backend logic using Java, significantly enhancing my problem-solving and application development skills.",
    skills: ["Android Studio", "Java", "XML", "Design Patterns"],
    sourceCode: "https://github.com/leijason22/RU-Pizzeria",
    image: "/images/project2.png",
  },
  {
    title: "First Portfolio Website",
    description:
      "This was my first-ever portfolio website and one of my earliest projects, marking my introduction to web development. It was my first experience working with HTML, CSS, and JavaScript, as well as React. Building this project taught me the fundamentals of frontend development, responsive design, and React concepts, laying a strong foundation for future projects.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/leijason22/jason-portfolio",
    image: "/images/project2.png",
  },
  {
    title: "Sillybus",
    description:
      "This project was my first hackathon experience and one of the first projects I ever created. Sillybus automates creating Google Classrooms from syllabus files (PDF, DOCX, TXT) to make a teacher’s life easier. Built using Python, Flask, and Google Cloud, it extracts data from uploaded syllabi, processes it, and formats it for seamless classroom setup. This experience introduced me to Flask, Python integration, and API interaction, sparking my love for programming and problem-solving.",
    skills: ["Python", "Flask", "Google Cloud", "File Parsing"],
    sourceCode: "https://github.com/leijason22/Sillybus",
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
          <h2 className="text-3xl font-bold mb-4 text-center text-[#747FE0]">
            Skills
          </h2>
          <p>This is the Skills section of the portfolio.</p>
        </section>

        <section id="contact" className="py-16">
          <Contact />
          <footer className="mt-12 text-center text-sm text-[#4A4A6A]">
            © 2025 Jason Lei
          </footer>
        </section>
      </main>
    </div>
  );
}
