type ProjectProps = {
  project: {
    title: string;
    description: string;
    skills: string[];
    //   liveDemo: string;
    sourceCode: string;
    image: string;
  };
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-md mb-4"
      />
      <h2 className="text-2xl text-[#515F7F] font-bold mb-2">
        {project.title}
      </h2>
      <p className="text-[#515F7F] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        {/* <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a> */}
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Source
        </a>
      </div>
    </div>
  );
}
