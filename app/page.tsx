'use client';

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Code2, Database, Cpu, Wrench, Calendar, Building } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col items-center">
      {/* Header */}
      <header className="fixed w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-[#333]">
        <div className="w-full flex justify-center">
          <div className="container px-6 py-4 max-w-6xl w-full">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                Daniel<span className="text-[#2563EB]">Mehany</span>
                <div className="text-sm text-[#999]">Waterloo Mechatronics Engineering Student</div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-[#999] hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link href="#about" className="text-[#999] hover:text-white transition-colors text-sm">
                  About
                </Link>
                <Link href="#experience" className="text-[#999] hover:text-white transition-colors text-sm">
                  Experience
                </Link>
                <Link href="#projects" className="text-[#999] hover:text-white transition-colors text-sm">
                  Projects
                </Link>
                <Link 
                  href="/DMresume7.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#999] hover:text-white transition-colors text-sm"
                >
                  Resume
                </Link>
                <Link 
                  href="#contact" 
                  className="bg-[#222] px-4 py-2 rounded-lg text-white hover:bg-[#333] transition-colors text-sm"
                >
                  Contact Me
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full min-h-screen pt-32 pb-16">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 justify-between">
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left max-w-4xl lg:max-w-none">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  Hi, I'm <span className="text-[#1D4ED8]">Daniel Mehany</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Hardware & Embedded Systems Engineer
                </h2>
                <p className="text-[#999] text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
                  I am an aspiring Hardware and embedded systems engineer with hands-on experience designing and testing embedded hardware. Proven track record building multi-layer STM32 and 555-timer PCBs in Altium, authoring C/C++ firmware for HIL-validated CAN-based HMI dashboards, and optimizing MATLAB automation scripts.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 lg:gap-20 mb-12">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-2">2+</h3>
                    <p className="text-[#999]">Years Experience</p>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-2">5+</h3>
                    <p className="text-[#999]">Major Projects</p>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-2">15+</h3>
                    <p className="text-[#999]">Technical Skills</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                  <Link 
                    href="#projects"
                    className="bg-[#222] px-6 py-3 rounded-lg text-white hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                  >
                    View Projects →
                  </Link>
                  <Link 
                    href="/DMresume7.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222] px-6 py-3 rounded-lg text-white hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                  >
                    Resume ↓
                  </Link>
                </div>
                <div className="flex justify-center lg:justify-start gap-4">
                  <Link
                    href="https://github.com/danielmehany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/danielmehany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="w-48 h-48 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden border-4 border-[#333] flex-shrink-0 bg-[#222]">
                <div className="relative w-full h-full">
                  <Image
                    src="/profilepic.jpg"
                    alt="Daniel Mehany"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-16 bg-[#1A1A1A]" id="projects">
          <div className="container px-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <Link
                  href="https://github.com/danielmehany" 
                  target="_blank"
                  className="text-[#1D4ED8] hover:text-[#1D4ED8]/80 transition-colors flex items-center gap-2"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project cards with updated styling */}
                <div className="bg-[#111] rounded-xl p-6 flex flex-col h-full">
                  <div className="flex gap-8 items-start h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">SketchBot</h3>
                      <p className="text-[#2563EB] mb-4">10/2024 - 11/2024</p>
                      <p className="text-[#999] text-lg">A robot capable of creating outlines for engineering sketches using C++ and Robot C.</p>
                    </div>
                    <div className="relative w-40 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/image.png"
                        alt="SketchBot Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl p-6 flex flex-col h-full">
                  <div className="flex gap-8 items-start h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">BestBudd</h3>
                      <p className="text-[#2563EB] mb-4">03/2024 - Present</p>
                      <p className="text-[#999] text-lg">An innovative educational platform using Next.js and Express.js, featuring a modern UI for both teachers and students.</p>
                    </div>
                    <div className="relative w-40 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/bestbudd.png"
                        alt="BestBudd Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl p-6 flex flex-col h-full">
                  <div className="flex gap-8 items-start h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">IMU STM32 Board</h3>
                      <p className="text-[#2563EB] mb-4">04/2024</p>
                      <p className="text-[#999] text-lg">Custom 4-layer PCB with STM32 microcontroller and MPU-6050 accelerometer for motion tracking.</p>
                    </div>
                    <div className="relative w-40 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/stm32.png"
                        alt="IMU STM32 Board Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl p-6 flex flex-col h-full">
                  <div className="flex gap-8 items-start h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">TurtleBot4 Challenge</h3>
                      <p className="text-[#2563EB] mb-4">05/2024</p>
                      <p className="text-[#999] text-lg">Advanced robotics framework using ROS 2 for autonomous navigation and obstacle avoidance.</p>
                    </div>
                    <div className="relative w-40 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/turtlebot.png"
                        alt="TurtleBot4 Challenge Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl p-6 flex flex-col h-full">
                  <div className="flex gap-8 items-start h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Student Exam Score Predictor</h3>
                      <p className="text-[#2563EB] mb-4">02/2024</p>
                      <p className="text-[#999] text-lg">Machine learning model analyzing 30,000+ student entries to predict exam performance with high accuracy.</p>
                    </div>
                    <div className="relative w-40 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/predictor.png"
                        alt="Student Exam Score Predictor Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-16 bg-[#1A1A1A]" id="about">
          <div className="container px-6 max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-12">Core Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Design & Simulation */}
                <div className="bg-[#222] rounded-xl p-8 hover:bg-[#2a2a2a] transition-colors flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center">
                      <Wrench className="w-8 h-8 text-[#1D4ED8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Design & Simulation</h3>
                  <p className="text-[#999] leading-relaxed text-left">
                    Altium Designer, KiCad, Tinkercad, AutoCAD, SolidWorks, MATLAB, Simulink
                  </p>
                </div>

                {/* Embedded & Control Systems */}
                <div className="bg-[#222] rounded-xl p-8 hover:bg-[#2a2a2a] transition-colors flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-[#1D4ED8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Embedded & Control Systems</h3>
                  <p className="text-[#999] leading-relaxed text-left">
                    Hardware-in-the-Loop (HIL), Verilog, ROS 2
                  </p>
                </div>

                {/* Computer Vision & Data Analysis */}
                <div className="bg-[#222] rounded-xl p-8 hover:bg-[#2a2a2a] transition-colors flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center">
                      <Database className="w-8 h-8 text-[#1D4ED8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Computer Vision & Data Analysis</h3>
                  <p className="text-[#999] leading-relaxed text-left">
                    OpenCV, MediaPipe, Control Vision, scikit-learn, Pandas, NumPy
                  </p>
                </div>

                {/* Programming & Development */}
                <div className="bg-[#222] rounded-xl p-8 hover:bg-[#2a2a2a] transition-colors flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-[#1D4ED8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">Programming & Development</h3>
                  <p className="text-[#999] leading-relaxed text-left">
                    C++, C, Python, Java, JavaScript, HTML/CSS, SQL, Docker, Node.js, Express.js, Linux, Virtual Machines, Git, GitHub, Jupyter Notebook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full py-16 bg-[#1A1A1A]" id="experience">
          <div className="container px-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-12">Experience</h2>
              <div className="space-y-8">
                <div className="bg-[#222] rounded-xl p-8 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Embedded Systems Engineer</h3>
                      <p className="text-[#999]">Skyjack Inc.</p>
                    </div>
                    <p className="text-[#999]">Jun. 2025 - Apr. 2025</p>
                  </div>
                  <ul className="text-[#999] space-y-2">
                    <li>• Designed a Simulink-based HMI dashboard to simulate functionality through CAN communication and DBC file decoding</li>
                    <li>• Supported Hardware-in-the-Loop (HIL) testing by validating controller I/Os using custom dashboard, reducing testing time by 30%</li>
                    <li>• Created a script to automate data collection from MATLAB simulation graphs, cutting analysis time by 100%</li>
                    <li>• Optimized over 1,000 lines of MATLAB code for data visualization, resulting in a 20% faster runtime</li>
                  </ul>
                </div>

                <div className="bg-[#222] rounded-xl p-8 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Hardware Design Engineer</h3>
                      <p className="text-[#999]">Formula Electric</p>
                    </div>
                    <p className="text-[#999]">Sept. 2024 - Present</p>
                  </div>
                  <ul className="text-[#999] space-y-2">
                    <li>• Designed a PCB in Altium Designer to monitor voltage levels for electrical safety, integrating a 555 timer, LEDs, capacitors, resistors, USB port, and system wiring for amplitude-based flashing indicators</li>
                    <li>• Supported Formula Electric Race Car electrical system compliance and collaborated in team meetings on progress tracking, troubleshooting, and task planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 bg-[#1A1A1A]" id="contact">
          <div className="container px-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-[#999] text-lg mb-12">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and engineering.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Email */}
                <div className="bg-[#222] rounded-xl p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:dmehany@uwaterloo.ca" className="text-[#1D4ED8] hover:text-[#1D4ED8]/80 transition-colors">
                    dmehany@uwaterloo.ca
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="bg-[#222] rounded-xl p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mb-4">
                    <Linkedin className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/danielmehany" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:text-[#1D4ED8]/80 transition-colors">
                    /in/danielmehany
                  </a>
                </div>

                {/* GitHub */}
                <div className="bg-[#222] rounded-xl p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">GitHub</h3>
                  <a href="https://github.com/danielmehany" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:text-[#1D4ED8]/80 transition-colors">
                    /danielmehany
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-[#999]">
                  Currently based in Waterloo, Ontario 🇨🇦
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-[#333] bg-[#1A1A1A]">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#999]">© 2024 Daniel Mehany. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="mailto:dmehany@uwaterloo.ca" className="text-[#999] hover:text-white transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/danielmehany" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/danielmehany" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
