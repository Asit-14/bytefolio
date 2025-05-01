import { Download } from 'lucide-react' // Make sure you import the icon
import React, { useEffect, useState } from 'react'
import profilePic from '../public/pic.png'
import { Typewriter } from 'react-simple-typewriter'



;<SocialLink
  icon={<Download />}
  href="/Asit_Kumar_Resume.pdf" // Replace with your actual resume path
  label="Download Resume"
/>

import {
  BookOpen,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Terminal,
  PenTool as Tool,
  Trophy,
  User,
} from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-90" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
            <div className="mb-8 relative">
              <div className="absolute inset-0 animate-pulse bg-blue-500 rounded-full blur-xl opacity-20"></div>
              <img
                src={profilePic}
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 object-cover animate-float shadow-2xl"
              />
            </div>
            <h1 className="text-6xl font-bold mb-4 gradient-text">
              Asit Kumar
            </h1>
            <p className="text-2xl text-blue-300 mb-8 font-light">
              Computer Science Engineering Student
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <SocialLink
                icon={<Github />}
                href="https://github.com/Asit-14"
                label="GitHub"
              />
              <SocialLink
                icon={<Linkedin />}
                href="https://www.linkedin.com/in/asit14/"
                label="LinkedIn"
              />
              <SocialLink
                icon={<Instagram />}
                href="https://instagram.com/asit.14"
                label="Instagram"
              />
              <SocialLink
                icon={<Code2 />}
                href="https://geeksforgeeks.org/user/asit14"
                label="GeeksforGeeks"
              />
              <SocialLink
                icon={<Code2 />}
                href="https://leetcode.com/u/Asit-14/"
                label="LeetCode"
              />
              <SocialLink
                icon={<Mail />}
                href="mailto:asitshakya789@gmail.com"
                label="Email"
              />
            </div>
            <div className="text-center mt-8 text-2xl text-blue-400 font-mono">
              <Typewriter
                words={['eat();', 'sleep();', 'code();', 'repeat();']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            <div className="flex justify-center mt-6">
              <a
                href="https://drive.google.com/file/d/14xeod8fOsoQxHhwqJiwN2zfZdPEJjRkn/view?usp=sharing"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<User />} title="About Me" />
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 shadow-2xl">
            <p className="text-xl leading-relaxed text-gray-300">
              Hey! I’m a third-year B.Tech CSE student with a strong passion for
              software development and emerging tech. I enjoy solving complex
              problems, building cool projects, and continuously learning new
              things. Technology is always evolving, and I love keeping up with
              it, pushing myself to grow as a developer. Excited for the journey
              ahead!
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <StatCard number="15+" label="Projects Completed" /> */}
              {/* <StatCard number="200+" label="DSA Problems Solved" /> */}
              {/* <StatCard number="3" label="Hackathons Won" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 relative bg-[#112240]">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<GraduationCap />} title="Education" />
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-xl text-blue-300">
                    Dr. A. P. J. Abdul Kalam Technical University, Lucknow
                  </p>
                  <p className="text-gray-400 mt-2">2022 - 2026</p>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-300">Current CGPA:</span>
                      <span className="text-blue-400 font-bold text-xl">
                        7.5
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full skill-progress"
                        style={{ width: '75.5%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<Cpu />} title="Technical Skills" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCategory
              icon={<Terminal />}
              title="Programming Languages"
              skills={[
                { name: 'Java', level: 90 },
                { name: 'C++/C', level: 80 },
                { name: 'Python', level: 75 },
              ]}
            />
            <SkillCategory
              icon={<Globe />}
              title="Web Technologies"
              skills={[
                { name: 'Node.js', level: 80 },
                { name: 'Express.js', level: 75 },
                { name: 'Spring Boot', level: 70 },
                { name: 'HTML/CSS/JavaScript', level: 70 },
              ]}
            />
            <SkillCategory
              icon={<Database />}
              title="Databases"
              skills={[
                { name: 'MySQL', level: 85 },
                { name: 'MongoDB', level: 70 },
              ]}
            />
            <SkillCategory
              icon={<Tool />}
              title="Tools & Others"
              skills={[
                { name: 'Git & GitHub', level: 90 },
                { name: 'VScode', level: 70 },
                { name: 'AWS', level: 70 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative bg-[#112240]">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<BookOpen />} title="Featured Projects" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="DevTinder – Developer Matchmaking Platform"
              description="DevTinder is a unique developer matchmaking platform inspired by Tinder, designed to foster meaningful collaboration. Users can swipe to discover like-minded developers, share innovative ideas, and team up on projects — all with real-time chat and seamless interactions."
              tech={['Node.js', 'Express.js', 'React.js', 'MongoDB']}
              link="https://github.com/Asit-14/devTinder"
              image="devtinder.png"
            />
            <ProjectCard
              title="Real-Time Face Recognition"
              description=" face recognition using OpenCV and face_recognition libraries. The script captures real-time video from a camera, detects faces in the stream, and compares them with previously loaded images to identify known faces."
              tech={['Python', 'OpenCV', 'TensorFlow', 'face_recognition']}
              link="https://github.com/Asit-14/Face-Recognition-project"
              image="download.jpeg"
            />
            <ProjectCard
              title="Chatup! Real-Time Chat Application"
              description=" Chatup, a powerful and intuitive real-time chat application that allows users to connect, communicate, and collaborate seamlessly. This README will guide you through the installation process, provide an overview of the application, and help you get started quickly."
              tech={['Node.js', 'MongoDB', 'Socket-io', 'Express.js']}
              link="https://github.com/Asit-14/ChatUp"
              image="chat.png"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-[#0e1f39]">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<Trophy />} title="Certifications" />
          <div className="max-w-4xl mx-auto space-y-6">
            <Achievement
              icon={<Trophy />}
              title="Full Stack Web Development"
              description="Completed Full Stack Web Development Certification from Udemy."
            />
            <Achievement
              icon={<Trophy />}
              title="Google Cloud Essentials"
              description="Earned Google Cloud Digital Leader Essentials Certificate."
            />
            <Achievement
              icon={<Trophy />}
              title="Java Programming"
              description="Certified in Java Programming from HackerRank."
            />
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<Trophy />} title="Achievements" />
          <div className="max-w-4xl mx-auto space-y-6">
            <Achievement
              icon={<Code2 />}
              title="Competitive Programming"
              description="• Solved 200+ DSA problems on GeeksforGeeks and Leetcode"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a192f]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Asit kumar. All rights reserved.
          </p>
          <p className="text-blue-400">
            Made with ❤️ using React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  )
}

function SocialLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#112240] hover:bg-blue-500 transition-all duration-300 shadow-lg">
        <span className="text-blue-300 group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
      </div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-400">
        {label}
      </span>
    </a>
  )
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="flex flex-col items-center mb-16">
      <span className="text-blue-500 mb-4">{icon}</span>
      <h2 className="text-4xl font-bold gradient-text">{title}</h2>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-lg bg-[#112240]">
      <p className="text-3xl font-bold text-blue-400 mb-2">{number}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}

function SkillCategory({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode
  title: string
  skills: { name: string; level: number }[]
}) {
  return (
    <div className="glass-card rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-blue-500">{icon}</span>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
}: {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
}) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden shadow-2xl group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-blue-300">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <ExternalLink size={24} />
          </a>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-[#112240] rounded-full text-sm text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Achievement({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="glass-card rounded-2xl p-8 shadow-2xl">
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-blue-300">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default App
