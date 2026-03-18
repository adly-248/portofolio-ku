'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { name: "Laravel", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "HTML & CSS", level: 80 },
    { name: "Bootstrap", level: 70 },
    { name: "Node.js", level: 40 },
  ];

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
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

      {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-lg tracking-tight">
            Adly<span className="text-blue-500">.</span>
            </span>
            <div className="flex items-center gap-3 md:gap-6">
            <div className="flex gap-3 md:gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
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
      <section className="max-w-4xl mx-auto px-6 pt-24 md:pt-40 pb-24">
        <p className="text-blue-500 font-medium mb-3 text-sm tracking-widest uppercase">Halo, saya</p>
        <h1 className="text-5xl font-bold mb-4 leading-tight">Adly Febryan</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
          Siswa SMK produktif yang sedang menjalani PKL dengan semangat belajar tinggi,
          khususnya di bidang pengembangan web dan teknologi perangkat lunak.
        </p>
        <div className="flex gap-4">
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
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded"></div>
          <div className="grid md:grid-cols-3 gap-12 items-center">
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
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded"></div>
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-400 dark:text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded mx-auto"></div>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Tertarik untuk berkolaborasi atau sekadar ngobrol soal teknologi?
            Jangan ragu untuk menghubungi saya!
          </p>
          <a
            href="mailto:adlyfebryan0@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Kirim Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-slate-700 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
        © 2025 Adly Febryan. Made with Next.js & Tailwind CSS.
      </footer>

    </main>
  );
}