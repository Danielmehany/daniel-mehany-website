import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Daniel Mehany</h1>
            <div className="flex items-center gap-4">
              <Link href="#about" className="hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link href="#experience" className="hover:text-gray-600 transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Daniel Mehany</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Software Developer & Technology Enthusiast</p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building exceptional digital experiences.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="https://www.linkedin.com/in/danielmehany/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/Danielmehany" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">About Me</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700">
                  I'm a dedicated software developer with a passion for creating innovative solutions and building
                  exceptional digital experiences. I enjoy working with modern technologies and am always eager to learn
                  and grow in the ever-evolving tech landscape.
                </p>
                <p className="text-lg text-gray-700">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Code className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Full-Stack Development</h4>
                    <p className="text-gray-600">Building end-to-end solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Briefcase className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Problem Solving</h4>
                    <p className="text-gray-600">Creative solutions to complex challenges</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Continuous Learning</h4>
                    <p className="text-gray-600">Always exploring new technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-xl">Frontend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5 / CSS3</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-xl">Backend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Databases</li>
                    <li>APIs</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-xl">Tools</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Git / GitHub</li>
                    <li>VS Code</li>
                    <li>Docker</li>
                    <li>Cloud Platforms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Experience</h3>
            <div className="space-y-8">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-semibold">Software Developer</h4>
                    <span className="text-gray-600">Present</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Developing innovative software solutions and contributing to various projects using modern
                    technologies and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black text-white text-sm rounded">React</span>
                    <span className="px-3 py-1 bg-black text-white text-sm rounded">TypeScript</span>
                    <span className="px-3 py-1 bg-black text-white text-sm rounded">Node.js</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Let's Connect</h3>
            <p className="text-xl mb-12 text-gray-300">
              I'm always interested in new opportunities and collaborations.
            </p>
            <div className="flex justify-center gap-8 mb-12">
              <Link
                href="https://www.linkedin.com/in/danielmehany/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Danielmehany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors"
              >
                <Github className="h-6 w-6" />
                GitHub
              </Link>
              <Link
                href="mailto:daniel@example.com"
                className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors"
              >
                <Mail className="h-6 w-6" />
                Email
              </Link>
            </div>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Daniel Mehany. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
