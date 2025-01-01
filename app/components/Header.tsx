import Link from "next/link";

// about, experience, projects, courses, skills, other

export default function Header() {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Site Title */}
          <div className="text-2xl font-bold">
            <Link href="/">Jason Lei</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="#experience" className="hover:text-blue-400">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link href="#courses" className="hover:text-blue-400">
              Courses
            </Link>
            <Link href="#skills" className="hover:text-blue-400">
              Skills
            </Link>
            <Link href="#other" className="hover:text-blue-400">
              Other
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
