export default function Experience() {
  return (
    <section id="experience" className="bg-[#F7F9FC] text-[#747FE0] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">My Timeline!</h1>
        <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
          <div className="mb-8 ml-8">
            <div className="absolute w-6 h-6 bg-purple-600 border-2 border-purple-800 rounded-full -left-3"></div>
            <div className="bg-[#5B5D7A] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">October 2024 - Present</h2>
              <h3 className="text-lg font-semibold">
                Software Developer Fellows
              </h3>
              <p className="text-gray-300 mt-2">
                8-week fellowship working with React.js and TypeScript.
              </p>
            </div>
          </div>

          <div className="mb-8 ml-8">
            <div className="absolute w-6 h-6 bg-yellow-400 border-2 border-yellow-600 rounded-full -left-3"></div>
            <div className="bg-[#5B5D7A] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">July 2024 - Present</h2>
              <h3 className="text-lg font-semibold">Lead Web Developer</h3>
              <p className="text-gray-300 mt-2">BLAH BLAH BLAH</p>
            </div>
          </div>

          <div className="mb-8 ml-8">
            <div className="absolute w-6 h-6 bg-green-400 border-2 border-green-600 rounded-full -left-3"></div>
            <div className="bg-[#5B5D7A] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">June - August 2024</h2>
              <h3 className="text-lg font-semibold">
                Software Developer Intern
              </h3>
              <p className="text-gray-300 mt-2">BLAH BLAH BLAH</p>
            </div>
          </div>

          <div className="mb-8 ml-8">
            <div className="absolute w-6 h-6 bg-red-400 border-2 border-red-600 rounded-full -left-3"></div>
            <div className="bg-[#5B5D7A] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">May - August 2023</h2>
              <h3 className="text-lg font-semibold">
                Enjoying CS & Personal Projects
              </h3>
              <p className="text-gray-300 mt-2">
                Worked on personal projects while learning new technologies.
                Unfortunately, I couldn’t find an internship but used this time
                to build skills and focus on growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
