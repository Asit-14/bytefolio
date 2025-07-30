import { Download } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {
  BookOpen,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Trophy,
  User,
  Award,
  Code,
  FolderOpen,
  Sun,
  Moon
} from 'lucide-react'

function App() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [codeStep, setCodeStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Dark mode as default

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/asitkumar.dev/visits')
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.value))
  }, [])

  // Initialize dark mode from localStorage (default to dark)
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme))
    } else {
      // Default to dark mode instead of system preference
      setIsDarkMode(true)
    }
  }, [])

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }

  // Code running animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setCodeStep((prev) => (prev + 1) % 8)
      }
    }, 1500)
    return () => clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    // Auto-start the code animation after 2 seconds
    const timer = setTimeout(() => {
      setIsRunning(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 font-poppins ${isDarkMode
      ? 'dark bg-gray-900 text-gray-100'
      : 'bg-misty-white text-charcoal-black'
      }`}>      {/* Dark Mode Toggle Button - Fixed Position */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 border-2 ${isDarkMode
          ? 'bg-gray-800 text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60'
          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          } hover:scale-110`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>

      {/* Hero Section */}
      <header className={`min-h-screen flex items-center justify-center relative overflow-hidden section-aesthetic ${isDarkMode ? 'bg-gray-900' : 'bg-[#FDF6F0]'
        }`}>
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 opacity-90 ${isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'
            : 'bg-gradient-to-br from-misty-white via-light-sand to-blush-pink'
            }`} />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className={`w-full h-full object-cover ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}
          />
          {/* Animated Background Elements */}
          <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-blue-500/20' : 'bg-soft-coral/10'
            }`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-500/20' : 'bg-dusty-rose/10'
            }`}></div>
          <div className={`absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse delay-500 ${isDarkMode ? 'bg-green-500/20' : 'bg-muted-sage/10'
            }`}></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Profile Info */}
            <div className="text-center lg:text-left space-y-8">

              {/* Main Heading */}
              <div className="space-y-4">
                <div className={`text-xl md:text-2xl font-body font-bold px-4 py-2 rounded-full inline-block border ${isDarkMode
                  ? 'text-blue-400 bg-gray-800/50 backdrop-blur-sm border-blue-400/30'
                  : 'text-muted-sage bg-white/10 backdrop-blur-sm border-soft-coral/20'
                  }`}>👋 Hello, I'm</div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className={`bg-clip-text text-transparent ${isDarkMode
                    ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                    : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                    }`}>
                    Asit Kumar
                  </span>
                </h1>
                <div className={`text-xl md:text-2xl font-body h-12 ${isDarkMode ? 'text-gray-300' : 'text-body'
                  }`}>
                  <Typewriter
                    words={['Full Stack Developer', 'B.Tech CSE Student', 'Problem Solver', 'Open Source Contributor']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </div>

              {/* Brief Description */}
              <p className={`text-lg font-body leading-relaxed max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-body'
                }`}>
                Passionate <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>B.Tech CSE student</strong> specializing in backend development with Node.js and Spring Boot.
                I love building innovative solutions and contributing to open-source projects.
              </p>

              {/* Running Code Snippet */}
              <div className="relative">
                <div className={`rounded-lg p-4 max-w-2xl mx-auto lg:mx-0 border ${isDarkMode
                  ? 'bg-gray-800 border-blue-400/20'
                  : 'bg-gray-900 border-soft-coral/20'
                  }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className={`text-xs font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-400'
                      }`}>Life.js - Debugging...</span>
                    {isRunning && (
                      <div className="ml-auto flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs font-mono">Running</span>
                      </div>
                    )}
                  </div>
                  <RunningCode step={codeStep} isRunning={isRunning} />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/bytefolio/Asit Resume.docx.pdf"
                  download="Asit_Kumar_Resume.pdf"
                  className={`flex items-center gap-3 justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-400'
                    : 'bg-soft-coral hover:bg-dusty-rose text-white border-2 border-soft-coral'
                    }`}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className={`flex items-center gap-3 justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 border-2 ${isDarkMode
                    ? 'bg-transparent hover:bg-blue-600/20 text-blue-400 border-blue-400 hover:border-blue-300'
                    : 'bg-transparent hover:bg-soft-coral/20 text-soft-coral border-soft-coral hover:border-dusty-rose'
                    }`}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <SocialLink href="https://www.linkedin.com/in/asit14/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                <SocialLink href="https://github.com/Asit-14" icon={<Github className="w-5 h-5" />} label="GitHub" />
                <SocialLink href="mailto:asitshakya789@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative z-20">
                {/* Main Profile Card */}
                <div className="card-aesthetic group relative transform hover:scale-105 transition-all duration-500 p-8 max-w-sm mx-auto">


                  <div className="text-center space-y-6 relative z-10">

                    {/* Profile Image */}
                    <div className="relative mx-auto w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-soft-coral via-dusty-rose to-muted-sage rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
                      <img
                        src="/bytefolio/pic.png"
                        alt="Asit Kumar"
                        className="w-full h-full rounded-full object-cover border-4 border-soft-coral shadow-aesthetic relative z-10 group-hover:border-dusty-rose transition-colors duration-500"
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-soft-coral to-dusty-rose rounded-full flex items-center justify-center border-4 border-misty-white shadow-lg">
                        <span className="text-xl">🚀</span>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage bg-clip-text text-transparent">
                        Asit Kumar
                      </h3>
                      <p className="text-lg text-muted-sage font-body">B.Tech CSE Student</p>
                      <p className="text-body font-body">📍 Noida, India</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-soft-coral/20">
                      <div className="text-center">
                        <div className="text-xl font-heading font-bold bg-gradient-to-r from-soft-coral to-dusty-rose bg-clip-text text-transparent">3+</div>
                        <div className="text-xs text-body font-body">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-heading font-bold bg-gradient-to-r from-dusty-rose to-muted-sage bg-clip-text text-transparent">400+</div>
                        <div className="text-xs text-body font-body">Problems</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-heading font-bold bg-gradient-to-r from-muted-sage to-soft-coral bg-clip-text text-transparent">7.5</div>
                        <div className="text-xs text-body font-body">SGPA</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-soft-coral/5 via-dusty-rose/5 to-muted-sage/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Coding Platforms Section */}
      <section className={`py-16 relative overflow-hidden ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent ${isDarkMode
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
              : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
              }`}>
              🏆 Coding Practice Platforms
            </h3>
            <p className={`text-lg font-body mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Follow my coding journey across these platforms
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Asit-14/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-orange-400/30 hover:border-orange-400/60'
                : 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 hover:border-orange-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-orange-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-orange-500 to-yellow-500'
                    : 'bg-gradient-to-br from-orange-400 to-yellow-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-lg">LC</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                    LeetCode
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/asit14"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-blue-500/20 to-red-500/20 border-blue-400/30 hover:border-blue-400/60'
                : 'bg-gradient-to-br from-blue-50 to-red-50 border-blue-200 hover:border-blue-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-blue-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-blue-500 to-red-500'
                    : 'bg-gradient-to-br from-blue-400 to-red-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-lg">CF</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    Codeforces
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/asit14"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-400/30 hover:border-amber-400/60'
                : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:border-amber-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-amber-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500'
                    : 'bg-gradient-to-br from-amber-400 to-orange-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-lg">CC</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>
                    CodeChef
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* AtCoder */}
            <a
              href="https://atcoder.jp/users/asit14"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-gray-500/20 to-slate-500/20 border-gray-400/30 hover:border-gray-400/60'
                : 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 hover:border-gray-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-gray-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-gray-500 to-slate-500'
                    : 'bg-gradient-to-br from-gray-400 to-slate-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-lg">AC</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    AtCoder
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/asit_14"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-400/30 hover:border-green-400/60'
                : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-green-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                    : 'bg-gradient-to-br from-green-400 to-emerald-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-lg">HR</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>
                    HackerRank
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* GeeksforGeeks */}
            <a
              href="https://www.geeksforgeeks.org/user/asit14/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-400/30 hover:border-emerald-400/60'
                : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-emerald-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-500'
                    : 'bg-gradient-to-br from-emerald-400 to-teal-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-xs">GFG</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>
                    GeeksforGeeks
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* Codedx */}
            <a
              href="https://www.codedx.io/@asit14"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDarkMode
                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/30 hover:border-purple-400/60'
                : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400'
                } shadow-lg hover:shadow-xl group-hover:shadow-purple-500/25`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                    : 'bg-gradient-to-br from-purple-400 to-pink-400'
                    } shadow-lg`}>
                    <span className="text-white font-bold text-xs">CDX</span>
                  </div>
                  <h4 className={`text-sm font-heading font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                    Codedx
                  </h4>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>

        {/* Background Animation */}
        <div className={`absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden`}>
          <div className={`absolute top-4 left-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-blue-500/10' : 'bg-soft-coral/5'}`}></div>
          <div className={`absolute top-4 right-1/4 w-24 h-24 rounded-full blur-3xl animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-500/10' : 'bg-dusty-rose/5'}`}></div>
        </div>
      </section>

      {/* About Section - Compact */}
      <section className={`py-16 section-aesthetic ${isDarkMode ? 'bg-gray-800' : 'bg-[#FAE9DC]'
        }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={isDarkMode ? 'text-blue-400' : 'text-muted-sage'}><User /></div>
              <h2 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                }`}>
                About Me
              </h2>
            </div>
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <p className={`text-lg font-body leading-relaxed mb-8 ${isDarkMode ? 'text-white font-medium' : 'text-body'
              }`}>
              I’m Asit Kumar, a passionate B.Tech CSE student and tech enthusiast.
              My journey started with curiosity about how websites work, and now I find myself diving deep into the world of
              full-stack development and emerging technologies. I'm comfortable working with HTML, CSS, and JavaScript for
              frontend development, and I enjoy building robust applications using Node.js and Express.js for the backend,
              creating RESTful APIs that power modern web applications.
              Whether it’s building career guidance systems or participating in programs like GSSoC,
              I strive to make every line of code count.
            </p>

            {/* Quick Skills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-blue-500/40 text-blue-200 border border-blue-400/30 font-semibold' : 'bg-soft-coral/20 text-soft-coral'
                }`}>Java</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-purple-500/40 text-purple-200 border border-purple-400/30 font-semibold' : 'bg-dusty-rose/20 text-dusty-rose'
                }`}>JavaScript</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-green-500/40 text-green-200 border border-green-400/30 font-semibold' : 'bg-muted-sage/20 text-muted-sage'
                }`}>Python</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-blue-500/40 text-blue-200 border border-blue-400/30 font-semibold' : 'bg-soft-coral/20 text-soft-coral'
                }`}>Node.js</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-purple-500/40 text-purple-200 border border-purple-400/30 font-semibold' : 'bg-dusty-rose/20 text-dusty-rose'
                }`}>MongoDB</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-green-500/40 text-green-200 border border-green-400/30 font-semibold' : 'bg-muted-sage/20 text-muted-sage'
                }`}>React</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-yellow-500/40 text-yellow-200 border border-yellow-400/30 font-semibold' : 'bg-soft-coral/20 text-soft-coral'
                }`}>Express.js</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-red-500/40 text-red-200 border border-red-400/30 font-semibold' : 'bg-dusty-rose/20 text-dusty-rose'
                }`}>SQL</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-indigo-500/40 text-indigo-200 border border-indigo-400/30 font-semibold' : 'bg-muted-sage/20 text-muted-sage'
                }`}>APIs</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-pink-500/40 text-pink-200 border border-pink-400/30 font-semibold' : 'bg-soft-coral/20 text-soft-coral'
                }`}>AI/ML</span>
              <span className={`px-4 py-2 rounded-full text-sm font-body ${isDarkMode ? 'bg-teal-500/40 text-teal-200 border border-teal-400/30 font-semibold' : 'bg-dusty-rose/20 text-dusty-rose'
                }`}>HTML/CSS</span>
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-soft-coral/10 to-dusty-rose/10 rounded-lg">
                <p className="text-2xl font-heading font-bold bg-gradient-to-r from-soft-coral to-dusty-rose bg-clip-text text-transparent">3+</p>
                <p className="text-sm text-body font-body">Projects</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-dusty-rose/10 to-muted-sage/10 rounded-lg">
                <p className="text-2xl font-heading font-bold bg-gradient-to-r from-dusty-rose to-muted-sage bg-clip-text text-transparent">400+</p>
                <p className="text-sm text-body font-body">Problems Solved</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-muted-sage/10 to-soft-coral/10 rounded-lg">
                <p className="text-2xl font-heading font-bold bg-gradient-to-r from-muted-sage to-soft-coral bg-clip-text text-transparent">15+</p>
                <p className="text-sm text-body font-body">Pull Requests</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-soft-coral/10 to-dusty-rose/10 rounded-lg">
                <p className="text-2xl font-heading font-bold bg-gradient-to-r from-soft-coral to-dusty-rose bg-clip-text text-transparent">7.5</p>
                <p className="text-sm text-body font-body">SGPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Combined Section */}
      <section className={`py-16 section-aesthetic ${isDarkMode ? 'bg-gray-900/90' : ''}`} style={isDarkMode ? {} : { backgroundColor: '#F5F5DC' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                }`}>
                Education & Experience
              </h2>
              <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300 font-medium' : 'text-body'
                }`}>My academic journey and professional growth</p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Education */}
              <div className="space-y-6">
                <h3 className={`text-xl font-heading font-bold text-center mb-6 bg-clip-text text-transparent ${isDarkMode
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'bg-gradient-to-r from-soft-coral to-dusty-rose'
                  }`}>
                  🎓 Education
                </h3>

                <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-soft-coral to-dusty-rose rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-heading mb-1">Bachelor of Technology</h4>
                      <p className="text-muted-sage font-body mb-2">Computer Science & Engineering(CSE)</p>
                      <p className="text-body font-body font-medium mb-2">Babu Banarsi Das Institute of Technology</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-body font-body">2022 - 2026</span>
                        <span className="px-3 py-1 bg-soft-coral/20 text-soft-coral rounded-full font-body font-medium">SGPA: 7.5</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-dusty-rose/20 text-dusty-rose rounded text-xs font-body">DS</span>
                        <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">OS</span>
                        <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">DBMS</span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-dusty-rose/20 text-dusty-rose rounded text-xs font-body">CN</span>
                          <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">LLD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-muted-sage to-dusty-rose rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-heading mb-1">Higher Secondary (XII)</h4>
                      <p className="text-muted-sage font-body mb-2">Science (PCM)</p>
                      <p className="text-body font-body font-medium mb-2">Parvati Rastiy (PR) Inter College</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-body font-body">2018 - 2022</span>
                        <span className="px-3 py-1 bg-muted-sage/20 text-muted-sage rounded-full font-body font-medium">Score: 73%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <h3 className={`text-xl font-heading font-bold text-center mb-6 bg-clip-text text-transparent ${isDarkMode
                  ? 'bg-gradient-to-r from-purple-400 to-green-400'
                  : 'bg-gradient-to-r from-dusty-rose to-muted-sage'
                  }`}>
                  💼 Experience
                </h3>

                <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose to-muted-sage rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-heading mb-1">Open Source Contributor</h4>
                      <p className="text-muted-sage font-body mb-2">GirlScript Summer of Code (GSSoC) 2024</p>
                      <p className="text-body font-body text-sm mb-3">
                        Fixed bugs, added features, and collaborated with 20+ developers. Created 15+ pull requests across multiple repositories.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-dusty-rose/20 text-dusty-rose rounded text-xs font-body">JavaScript</span>
                        <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">React.js</span>
                        <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">GitHub</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-soft-coral to-dusty-rose rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-bold text-heading mb-1">Competitive Programming</h4>
                      <p className="text-muted-sage font-body mb-2">Problem Solving & Algorithms</p>
                      <p className="text-body font-body text-sm mb-3">
                        Solved 400+ problems on LeetCode, GeeksforGeeks, and CodeChef. Focused on data structures and algorithms.
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-body font-body">📊 400+ Problems</span>
                        <span className="text-body font-body">🏆 Multiple Contests</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Simplified */}
      <section className={`py-16 section-aesthetic ${isDarkMode ? 'bg-gray-800/90' : ''}`} style={isDarkMode ? {} : { backgroundColor: '#FAE9DC' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={isDarkMode ? 'text-blue-400' : 'text-muted-sage'}><FolderOpen /></div>
              <h2 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                }`}>
                Featured Projects
              </h2>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* DevTinder */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                <div className="relative mb-4">
                  <img
                    src="/bytefolio/devtinder.png"
                    alt="DevTinder"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-soft-coral text-white px-2 py-1 rounded-full text-xs font-body">
                    Featured
                  </div>
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">DevTinder</h4>
                <p className="text-body font-body text-sm mb-4">
                  A developer matchmaking platform built with Node.js, Express, and MongoDB. Features real-time matching and secure authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">Node.js</span>
                  <span className="px-2 py-1 bg-dusty-rose/20 text-dusty-rose rounded text-xs font-body">MongoDB</span>
                  <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">Express.js</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/Asit-14/devTinder_apis" target="_blank" className="flex items-center gap-2 text-soft-coral hover:text-dusty-rose transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-body">Code</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-muted-sage hover:text-soft-coral transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-body">Live</span>
                  </a>
                </div>
              </div>

              {/* Chat Application */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                <div className="relative mb-4">
                  <img
                    src="/bytefolio/chat.png"
                    alt="Chat App"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">Real-time Chat App</h4>
                <p className="text-body font-body text-sm mb-4">
                  A modern chat application with real-time messaging, user authentication, and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-dusty-rose/20 text-dusty-rose rounded text-xs font-body">Socket.io</span>
                  <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">React</span>
                  <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">Node.js</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/Asit-14/ChatUp" target="_blank" className="flex items-center gap-2 text-soft-coral hover:text-dusty-rose transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-body">Code</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-muted-sage hover:text-soft-coral transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-body">Demo</span>
                  </a>
                </div>
              </div>

              {/* Face Recognition System */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-4xl text-white">🔍</span>
                  </div>
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">Face Recognition System</h4>
                <p className="text-body font-body text-sm mb-4">
                  A real-time facial recognition application for identity verification using Python and OpenCV. Trained ML models to recognize and identify known faces with high accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">Python</span>
                  <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">OpenCV</span>
                  <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">Machine Learning</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/Asit-14/Face-Recognition-project" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-soft-coral hover:text-dusty-rose transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-body">Code</span>
                  </a>
                </div>
              </div>

              {/* Portfolio Website */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300">
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-soft-coral via-dusty-rose to-muted-sage rounded-lg flex items-center justify-center">
                    <span className="text-4xl text-white">💼</span>
                  </div>
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">Portfolio Website</h4>
                <p className="text-body font-body text-sm mb-4">
                  A responsive portfolio website built with React and TailwindCSS, showcasing modern design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-muted-sage/20 text-muted-sage rounded text-xs font-body">React</span>
                  <span className="px-2 py-1 bg-soft-coral/20 text-soft-coral rounded text-xs font-body">TailwindCSS</span>
                  <span className="px-2 py-1 bg-dusty-rose/20 text-dusty-rose rounded text-xs font-body">Vite</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-soft-coral hover:text-dusty-rose transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-body">Code</span>
                  </a>
                  <a href="https://github.com/Asit-14/bytefolio" target="_blank" className="flex items-center gap-2 text-muted-sage hover:text-soft-coral transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-body">Live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Simplified */}
      <section className={`py-16 section-aesthetic ${isDarkMode ? 'bg-gray-900/90' : ''}`} style={isDarkMode ? {} : { backgroundColor: '#F5F5DC' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={isDarkMode ? 'text-blue-400' : 'text-muted-sage'}><Cpu /></div>
              <h2 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                }`}>
                Skills & Technologies
              </h2>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">

            {/* Compact Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Programming Languages */}
              <div className="card-aesthetic">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-coral to-dusty-rose rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-heading">Languages</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-body">Java</span>
                    <span className="text-sm font-body text-soft-coral">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-soft-coral to-dusty-rose h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-body">JavaScript</span>
                    <span className="text-sm font-body text-dusty-rose">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-dusty-rose to-muted-sage h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-body">Python</span>
                    <span className="text-sm font-body text-muted-sage">80%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-muted-sage to-soft-coral h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>

              {/* Frameworks */}
              <div className="card-aesthetic">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose to-muted-sage rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-heading">Frameworks</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">Node.js</span>
                    <div className="w-2 h-2 bg-dusty-rose rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">Express.js</span>
                    <div className="w-2 h-2 bg-muted-sage rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">Spring Boot</span>
                    <div className="w-2 h-2 bg-soft-coral rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">React.js</span>
                    <div className="w-2 h-2 bg-dusty-rose rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="card-aesthetic">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-muted-sage to-soft-coral rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-heading">Databases</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">MongoDB</span>
                    <div className="w-2 h-2 bg-muted-sage rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">MySQL</span>
                    <div className="w-2 h-2 bg-soft-coral rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="card-aesthetic">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-coral to-dusty-rose rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-heading">Tools</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">Git & GitHub</span>
                    <div className="w-2 h-2 bg-soft-coral rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">VS Code</span>
                    <div className="w-2 h-2 bg-dusty-rose rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">Postman</span>
                    <div className="w-2 h-2 bg-muted-sage rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body">Docker</span>
                    <div className="w-2 h-2 bg-soft-coral rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Combined Section - Modern Layout */}
      <section className={`py-16 section-aesthetic ${isDarkMode ? 'bg-gray-800' : 'bg-[#FAE9DC]'
        }`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                }`}>
                Achievements & Certifications
              </h2>
              <p className={`font-body text-lg mt-4 ${isDarkMode ? 'text-gray-300' : 'text-body'
                }`}>Recognition and professional development milestones</p>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left Column - Achievements */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                    : 'bg-gradient-to-br from-soft-coral to-dusty-rose'
                    }`}>
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-2xl font-heading font-bold bg-clip-text text-transparent ${isDarkMode
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                    : 'bg-gradient-to-r from-soft-coral to-dusty-rose'
                    }`}>
                    Achievements
                  </h3>
                </div>

                {/* Achievement Items - Horizontal Layout */}
                <div className="space-y-4">
                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 ${isDarkMode
                    ? 'bg-gray-700/50 border-blue-400/20 hover:border-blue-400/40'
                    : 'bg-white/50 border-soft-coral/20 hover:border-soft-coral/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gradient-to-br from-soft-coral to-dusty-rose'
                      }`}>
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>GSSoC 2025</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>Open Source Contributor • Community Impact</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 ${isDarkMode
                    ? 'bg-gray-700/50 border-purple-400/20 hover:border-purple-400/40'
                    : 'bg-white/50 border-dusty-rose/20 hover:border-dusty-rose/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-purple-500 to-green-500'
                      : 'bg-gradient-to-br from-dusty-rose to-muted-sage'
                      }`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>Hacktoberfest 2024</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>Global Contributor • Open Source</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 ${isDarkMode
                    ? 'bg-gray-700/50 border-green-400/20 hover:border-green-400/40'
                    : 'bg-white/50 border-muted-sage/20 hover:border-muted-sage/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-green-500 to-blue-500'
                      : 'bg-gradient-to-br from-muted-sage to-soft-coral'
                      }`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>Problem Solver</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>400+ Problems • Algorithms & Data Structures</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 ${isDarkMode
                    ? 'bg-gray-700/50 border-blue-400/20 hover:border-blue-400/40'
                    : 'bg-white/50 border-soft-coral/20 hover:border-soft-coral/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gradient-to-br from-soft-coral to-dusty-rose'
                      }`}>
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>GitHub Contributor</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>15+ Pull Requests • Team Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Certifications */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode
                    ? 'bg-gradient-to-br from-purple-500 to-green-500'
                    : 'bg-gradient-to-br from-dusty-rose to-muted-sage'
                    }`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-2xl font-heading font-bold bg-clip-text text-transparent ${isDarkMode
                    ? 'bg-gradient-to-r from-purple-400 to-green-400'
                    : 'bg-gradient-to-r from-dusty-rose to-muted-sage'
                    }`}>
                    Certifications
                  </h3>
                </div>

                {/* Certification Items - Horizontal Layout */}
                <div className="space-y-4">
                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 group ${isDarkMode
                    ? 'bg-gray-700/50 border-blue-400/20 hover:border-blue-400/40'
                    : 'bg-white/50 border-soft-coral/20 hover:border-soft-coral/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gradient-to-br from-soft-coral to-dusty-rose'
                      }`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>Python (Basic)</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>HackerRank • 2024</p>
                    </div>
                    <a
                      href="https://www.hackerrank.com/certificates/iframe/84f69eb0abff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors opacity-0 group-hover:opacity-100 ${isDarkMode ? 'text-blue-400 hover:text-purple-400' : 'text-soft-coral hover:text-dusty-rose'
                        }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 group ${isDarkMode
                    ? 'bg-gray-700/50 border-purple-400/20 hover:border-purple-400/40'
                    : 'bg-white/50 border-dusty-rose/20 hover:border-dusty-rose/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-purple-500 to-green-500'
                      : 'bg-gradient-to-br from-dusty-rose to-muted-sage'
                      }`}>
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>AI Fundamentals</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>IBM SkillsBuild • 2025</p>
                    </div>
                    <a
                      href="https://www.credly.com/badges/c8dc12eb-702a-4e11-aa73-a08ae447a4c4/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors opacity-0 group-hover:opacity-100 ${isDarkMode ? 'text-purple-400 hover:text-green-400' : 'text-dusty-rose hover:text-muted-sage'
                        }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-300 group ${isDarkMode
                    ? 'bg-gray-700/50 border-green-400/20 hover:border-green-400/40'
                    : 'bg-white/50 border-muted-sage/20 hover:border-muted-sage/40'
                    }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode
                      ? 'bg-gradient-to-br from-green-500 to-blue-500'
                      : 'bg-gradient-to-br from-muted-sage to-soft-coral'
                      }`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-heading font-bold text-sm ${isDarkMode ? 'text-white' : 'text-heading'
                        }`}>API Fundamentals</h4>
                      <p className={`text-xs font-body opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>Postman Student Expert • 2025</p>
                    </div>
                    <a
                      href="https://badgr.com/public/assertions/qOhuKvd6QqKhg840M18KvA?identity__email=asitshakya789%40gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors opacity-0 group-hover:opacity-100 ${isDarkMode ? 'text-green-400 hover:text-blue-400' : 'text-muted-sage hover:text-soft-coral'
                        }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className={`mt-8 p-4 rounded-xl border ${isDarkMode
                  ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border-blue-400/20'
                  : 'bg-gradient-to-r from-soft-coral/10 via-dusty-rose/10 to-muted-sage/10 border-soft-coral/20'
                  }`}>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className={`text-lg font-heading font-bold bg-clip-text text-transparent ${isDarkMode
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                        : 'bg-gradient-to-r from-soft-coral to-dusty-rose'
                        }`}>4</div>
                      <div className={`text-xs font-body ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>Achievements</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-heading font-bold bg-clip-text text-transparent ${isDarkMode
                        ? 'bg-gradient-to-r from-purple-400 to-green-400'
                        : 'bg-gradient-to-r from-dusty-rose to-muted-sage'
                        }`}>3</div>
                      <div className={`text-xs font-body ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-heading font-bold bg-clip-text text-transparent ${isDarkMode
                        ? 'bg-gradient-to-r from-green-400 to-blue-400'
                        : 'bg-gradient-to-r from-muted-sage to-soft-coral'
                        }`}>2025</div>
                      <div className={`text-xs font-body ${isDarkMode ? 'text-gray-300' : 'text-body'
                        }`}>Latest Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 section-aesthetic ${isDarkMode
        ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800'
        : 'bg-gradient-to-b from-dusty-rose/5 via-misty-white to-soft-coral/5'
        }`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            {/* Section Header */}
            <div className="mb-12">
              <h2 className={`text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent mb-4 text-center ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-green-400'
                : 'bg-gradient-to-r from-soft-coral via-dusty-rose to-muted-sage'
                }`}>
                Let's Connect!
              </h2>
              <p className={`text-xl font-body leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-body'
                }`}>
                I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

              {/* Email */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-soft-coral to-dusty-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">Email</h4>
                <p className="text-body font-body mb-4">Drop me a line anytime</p>
                <a
                  href="mailto:asitkumarjha9472@gmail.com"
                  className="text-soft-coral hover:text-dusty-rose transition-colors font-body"
                >
                  asitshakya789@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-dusty-rose to-muted-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">LinkedIn</h4>
                <p className="text-body font-body mb-4">Let's connect professionally</p>
                <a
                  href="https://www.linkedin.com/in/asit14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dusty-rose hover:text-muted-sage transition-colors font-body"
                >
                  Connect with me
                </a>
              </div>

              {/* GitHub */}
              <div className="card-aesthetic hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-muted-sage to-soft-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heading mb-2">GitHub</h4>
                <p className="text-body font-body mb-4">Check out my code</p>
                <a
                  href="https://github.com/Asit-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-sage hover:text-soft-coral transition-colors font-body"
                >
                  Follow me
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className={`text-center pt-4 border-t ${isDarkMode ? 'border-blue-400/20' : 'border-soft-coral/20'
              }`}>
              <p className={`font-body mb-2 ${isDarkMode ? 'text-gray-300' : 'text-body'
                }`}>
                © 2024 Asit Kumar. Engineered with ❤️ and a lot of console.log()s.
              </p>
              <p className={`font-body mb-2 ${isDarkMode ? 'text-gray-300' : 'text-body'
                }`}>
                Built using React ⚛️ + Tailwind CSS 🌪️
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className={`text-sm font-body ${isDarkMode ? 'text-gray-300' : 'text-body'
                  }`}>Visitors:</span>
                <div className={`px-3 py-1 rounded-full ${isDarkMode
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                  : 'bg-gradient-to-r from-soft-coral/20 to-dusty-rose/20'
                  }`}>
                  <span className={`text-sm font-bold bg-clip-text text-transparent ${isDarkMode
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                    : 'bg-gradient-to-r from-soft-coral to-dusty-rose'
                    }`}>
                    {visitorCount > 0 ? visitorCount.toLocaleString() : '---'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper Components
const SocialLink = ({
  href,
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label: string
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-soft-coral/10 via-dusty-rose/10 to-muted-sage/10 rounded-full hover:from-soft-coral/20 hover:via-dusty-rose/20 hover:to-muted-sage/20 transition-all duration-300 transform hover:scale-105 border border-soft-coral/20 hover:border-dusty-rose/30"
    >
      <div className="text-soft-coral">{icon}</div>
      <span className="text-body font-body font-medium">{label}</span>
    </a>
  )
}

const RunningCode = ({
  step,
  isRunning
}: {
  step: number;
  isRunning: boolean
}) => {
  const codeLines = [
    { raw: "const developer = {", tokens: [{ text: "const", color: "text-purple-400" }, { text: " developer ", color: "text-blue-300" }, { text: "= {", color: "text-yellow-400" }] },
    { raw: "  name: 'Asit Kumar',", tokens: [{ text: "  name", color: "text-red-300" }, { text: ": ", color: "text-white" }, { text: "'Asit Kumar'", color: "text-green-300" }, { text: ",", color: "text-white" }] },
    { raw: "  skills: ['Java', 'JavaScript', 'Node.js'],", tokens: [{ text: "  skills", color: "text-red-300" }, { text: ": [", color: "text-white" }, { text: "'Java'", color: "text-green-300" }, { text: ", ", color: "text-white" }, { text: "'JavaScript'", color: "text-green-300" }, { text: ", ", color: "text-white" }, { text: "'Node.js'", color: "text-green-300" }, { text: "],", color: "text-white" }] },
    { raw: "  passion: 'Backend Development',", tokens: [{ text: "  passion", color: "text-red-300" }, { text: ": ", color: "text-white" }, { text: "'Backend Development'", color: "text-green-300" }, { text: ",", color: "text-white" }] },
    { raw: "  currentFocus: 'Spring Boot & APIs',", tokens: [{ text: "  currentFocus", color: "text-red-300" }, { text: ": ", color: "text-white" }, { text: "'Spring Boot & APIs'", color: "text-green-300" }, { text: ",", color: "text-white" }] },
    { raw: "  goal: 'Building scalable solutions',", tokens: [{ text: "  goal", color: "text-red-300" }, { text: ": ", color: "text-white" }, { text: "'Building scalable solutions'", color: "text-green-300" }, { text: ",", color: "text-white" }] },
    { raw: "  status: 'Always learning...'", tokens: [{ text: "  status", color: "text-red-300" }, { text: ": ", color: "text-white" }, { text: "'Always learning...'", color: "text-green-300" }] },
    { raw: "};", tokens: [{ text: "};", color: "text-yellow-400" }] }
  ]

  const renderTokens = (tokens: Array<{ text: string, color: string }>, lineIndex: number) => {
    return tokens.map((token, tokenIndex) => (
      <span key={tokenIndex} className={`${isRunning && lineIndex === step
        ? 'text-white'
        : lineIndex < step && isRunning
          ? 'text-green-400'
          : token.color
        }`}>
        {token.text}
      </span>
    ))
  }

  return (
    <div className="font-mono text-sm">
      {codeLines.map((line, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 py-1 transition-all duration-300 ${isRunning && index === step
            ? 'bg-soft-coral/20 border-l-2 border-soft-coral pl-2'
            : ''
            }`}
        >
          <span className={`text-xs w-6 text-right ${isRunning && index === step
            ? 'text-soft-coral'
            : index < step && isRunning
              ? 'text-green-500'
              : 'text-gray-500'
            }`}>
            {index + 1}
          </span>
          <span className="flex">
            {renderTokens(line.tokens, index)}
          </span>
          {isRunning && index === step && (
            <div className="ml-2 w-2 h-4 bg-soft-coral animate-pulse"></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
