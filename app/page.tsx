'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const experiences = [
  {
    company: "PT Pandawa Yogaswara Abadi Teknologi",
    position: "Implementor",
    period: "November 2025 — Sekarang",
    description:
      "Membuat form berbasis HTML, Bootstrap, dan Jasper Report untuk keperluan sistem informasi rumah sakit. Terlibat langsung dalam proses implementasi software di lingkungan profesional.",
  },
  ]
  
  const skills = [
    { name: "Laravel", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "HTML & CSS", level: 80 },
    { name: "Bootstrap", level: 70 },
    { name: "Node.js", level: 40 },
  ]

  const projects = [
    {
      title: "Sistem Bendahara Sekolah",
      description:
        "Website manajemen keuangan sekolah yang memudahkan pencatatan pemasukan, pengeluaran, dan laporan keuangan secara digital.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      status: "Selesai",
    },
    {
      title: "Sistem Klinik Kesehatan",
      description:
        "Website manajemen klinik sederhana untuk pencatatan data pasien dan riwayat pemeriksaan.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      status: "Selesai",
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="font-bold text-lg tracking-tight">
            Adly<span className="text-blue-500">.</span>
          </span>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex gap-3 md:gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-36 md:pt-40 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-500 font-medium mb-3 text-sm tracking-widest uppercase">
            Halo, saya
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-4 leading-tight">
            <TypeAnimation
                sequence={[
                'Adly Febryan',
                2000,
                'Web Developer',
                2000,
                'Full-Stack Learner',
                2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
            </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
            Siswa SMK produktif yang sedang menjalani PKL dengan semangat belajar tinggi,
            khususnya di bidang pengembangan web dan teknologi perangkat lunak.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">About Me</motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/adly.jpeg"
                  alt="Adly Febryan"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-100 dark:border-slate-600 shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Saya adalah siswa <strong>SMK 13 Bandung</strong> jurusan{" "}
                  <strong>Rekayasa Perangkat Lunak</strong> yang saat ini sedang
                  menjalani PKL (Praktik Kerja Lapangan).
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Saya memiliki ketertarikan besar di dunia{" "}
                  <strong>web development</strong> dan selalu antusias mempelajari
                  teknologi-teknologi baru. Saat ini saya aktif mengembangkan skill
                  di bidang backend maupun frontend.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">📍</span>
                  <span className="text-gray-600 dark:text-gray-300">Bandung, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">🎓</span>
                  <span className="text-gray-600 dark:text-gray-300">SMK 13 Bandung — RPL</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">💼</span>
                  <span className="text-gray-600 dark:text-gray-300">Sedang PKL</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">🚀</span>
                  <span className="text-gray-600 dark:text-gray-300">Open to opportunities</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Skills</motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={fadeUp}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
        <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Experience</motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
            <div className="space-y-6">
                {experiences.map((exp) => (
                <motion.div
                    key={exp.company}
                    variants={fadeUp}
                    className="border-l-4 border-blue-500 pl-6 py-2"
                >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="text-blue-500 font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 md:mt-0 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                        {exp.period}
                    </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                    </p>
                </motion.div>
                ))}
            </div>
            </motion.div>
        </div>
        </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Projects</motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-gray-100 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        project.status === "Selesai"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-blue-50 dark:bg-blue-900 text-blue-500 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Contact</motion.h2>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded mx-auto"></motion.div>
            <motion.p variants={fadeUp} className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Tertarik untuk berkolaborasi atau sekadar ngobrol soal teknologi?
              Jangan ragu untuk menghubungi saya!
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:adlyfebryan0@gmail.com"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors mb-8"
            >
              Kirim Email
            </motion.a>
            <motion.div variants={fadeUp} className="flex justify-center flex-wrap gap-4">
              <a
                href="https://github.com/adly-248"
                target="_blank"
                className="flex items-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adly-febryan-324b45330/"
                target="_blank"
                className="flex items-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://instagram.com/adlyfebryann_"
                target="_blank"
                className="flex items-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-slate-700 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
        © 2026 Adly Febryan. Made with Next.js & Tailwind CSS.
      </footer>

    </main>
  )
}