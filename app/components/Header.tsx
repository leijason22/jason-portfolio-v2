import Link from "next/link";

// about, experience, projects, courses, skills, other

export default function Header() {
  return (
    <header className="bg-[#F7F9FC] text-[#515F7F] sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="text-2xl font-bold">
            <Link href="#initialhome">Jason Lei</Link>
          </div>

          
          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-[#747FE0]">
              About
            </Link>
            <Link href="#experience" className="hover:text-[#747FE0]">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-[#747FE0]">
              Projects
            </Link>
            <Link href="#courses" className="hover:text-[#747FE0]">
              Courses
            </Link>
            <Link href="#skills" className="hover:text-[#747FE0]">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-[#747FE0]">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
