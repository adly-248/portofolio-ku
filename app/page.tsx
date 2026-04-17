'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        'service_z7hc429',
        'template_yoopjsm',
        { name: form.name, email: form.email, message: form.message },
        'y19W_c8A_OK7aIKBu'
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Nama kamu"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="email@kamu.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pesan</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tulis pesanmu di sini..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition-colors"
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
      {status === 'success' && (
        <p className="text-green-500 text-sm text-center">✅ Pesan berhasil dikirim!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">❌ Gagal kirim, coba lagi ya!</p>
      )}
    </form>
  )
}

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => setLoading(false), 1800)

    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const experiences = [
    {
      company: "PT Pandawa Yogaswara Abadi Teknologi",
      position: "Implementor",
      period: "November 2025 — Sekarang",
      description:
        "Membuat form berbasis HTML, Bootstrap, dan Jasper Report untuk keperluan sistem informasi rumah sakit. Terlibat langsung dalam proses implementasi software di lingkungan profesional.",
    },
    {
      company: "Majelis Perwakilan Kelas",
      position: "Anggota Komisi B",
      period: "2024 — 2025",
      description:
        "Mengelola dan menampung aspirasi ekstrakurikuler serta berperan sebagai penengah antara pihak eskul dan sekolah untuk menciptakan komunikasi yang harmonis.",
    },
  ]

  const skills = [
    { name: "Laravel", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "HTML & CSS", level: 80 },
    { name: "Bootstrap", level: 70 },
    { name: "Next.js", level: 40 },
    { name: "Python", level: 35 },
  ]

  const certificates = [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      category: "Cloud",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
      img: "/certificates/aws-cloud.jpg",
    },
    {
      name: "Job Roles in the Cloud",
      issuer: "Amazon Web Services",
      category: "Cloud",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
      img: "/certificates/aws-jobs.jpg",
    },
    {
      name: "Getting Started with Cloud Acquisition",
      issuer: "Amazon Web Services",
      category: "Cloud",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
      img: "/certificates/aws-acq.jpg",
    },
    {
      name: "Algorithm & Data Structures with Python",
      issuer: "Skilvull",
      category: "Python",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
      img: "/certificates/skilvull-algo.jpg",
    },
    {
      name: "Python Dasar",
      issuer: "Skilvull",
      category: "Python",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
      img: "/certificates/skilvull-dasar.jpg",
    },
    {
      name: "Python Lanjutan",
      issuer: "Skilvull",
      category: "Python",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
      img: "/certificates/skilvull-lanjutan.jpg",
    },
    {
      name: "Roadmap Web Developer",
      issuer: "Geeksfarm",
      category: "Web Dev",
      color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
      img: "/certificates/geeksfarm.jpg",
    },
    {
      name: "Anggota Majelis Perwakilan Kelas",
      issuer: "SMKN 13 Bandung",
      category: "Organisasi",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
      img: "/certificates/mpk.jpg",
    },
    {
      name: "Uji Level Kompetensi",
      issuer: "SMKN 13 Bandung",
      category: "Akademik",
      color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400",
      img: "/certificates/ulk.jpg",
    },
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
    {
      title: "Sistem HRD",
      description:
        "Website manajemen sumber daya manusia yang mencakup fitur absensi karyawan, pengajuan cuti, dan perhitungan gaji secara otomatis.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      status: "Selesai",
    },
  ]

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9997] bg-white dark:bg-slate-900 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold mb-6"
            >
              Adly<span className="text-blue-500">.</span>
            </motion.div>
            <div className="w-48 h-1 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[9996] h-1 bg-blue-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

        {/* Navbar */}
        <nav className="fixed top-1 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-lg tracking-tight">
              Adly<span className="text-blue-500">.</span>
            </span>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex gap-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-blue-500 transition-colors">
                    {link.label}
                  </a>
                ))}
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
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setMenuOpen(false)
                        const target = document.querySelector(link.href)
                        if (target) {
                          setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth' })
                          }, 300)
                        }
                      }}
                      className="text-gray-600 dark:text-gray-300 font-medium hover:text-blue-500 transition-colors py-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden max-w-4xl mx-auto px-6 pt-28 md:pt-40 pb-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-blue-500 font-medium mb-3 text-sm tracking-widest uppercase">
              Halo, saya
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-4 leading-tight">
              <TypeAnimation
                sequence={['Adly Febryan', 2000, 'Web Developer', 2000, 'Full-Stack Learner', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
              Siswa SMK produktif yang sedang menjalani PKL dengan semangat belajar tinggi,
              khususnya di bidang pengembangan web dan teknologi perangkat lunak.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Lihat Project
              </a>
              <a href="#contact" className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors">
                Hubungi Saya
              </a>
              <a
                href="/cv-adly.pdf"
                download
                className="flex items-center gap-2 border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">About Me</motion.h2>
              <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-600 mb-10 rounded"></motion.div>
              
              <motion.div variants={fadeUp} className="grid md:grid-cols-12 gap-12 items-start">
                {/* Profile Image */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative">
                    <img 
                      src="/adly.jpeg" 
                      alt="Adly Febryan" 
                      className="w-56 h-56 rounded-2xl object-cover border-2 border-white dark:border-slate-700 shadow-xl" 
                    />
                    {/* Dekorasi Aksen */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
                  </div>
                </div>

                {/* Professional Bio */}
                <div className="md:col-span-5">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    Halo, saya <span className="text-blue-600 dark:text-blue-400 font-semibold">Adly Febryan</span>. 
                    Seorang pengembang perangkat lunak yang berfokus pada solusi web modern dan efisien.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Saat ini, saya sedang menempuh pendidikan di <strong>SMK Negeri 13 Bandung</strong> jurusan 
                    <strong> Rekayasa Perangkat Lunak</strong>. Saya memiliki dedikasi tinggi dalam membangun 
                    aplikasi yang tidak hanya fungsional, tetapi juga memiliki pengalaman pengguna yang optimal.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                    "Berkomitmen untuk terus mengeksplorasi teknologi terbaru dan menerapkannya dalam proyek nyata."
                  </p>
                </div>

                {/* Quick Info / Details */}
                <div className="md:col-span-3 space-y-4 bg-white dark:bg-slate-700/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600">📍</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                      <p className="text-sm font-medium dark:text-gray-200">Bandung, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600">🎓</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
                      <p className="text-sm font-medium dark:text-gray-200">SMKN 13 Bandung — RPL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600">💼</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Current Status</p>
                      <p className="text-sm font-medium dark:text-gray-200">Internship (PKL)</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      ● Open to Opportunities
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
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
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Experience</motion.h2>
              <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <motion.div key={exp.company} variants={fadeUp} className="border-l-4 border-blue-500 pl-6 py-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="text-blue-500 font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 md:mt-0 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Certificates</motion.h2>
              <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.name}
                    variants={fadeUp}
                    className="bg-white dark:bg-slate-700 rounded-xl border border-gray-100 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    {/* Gambar Sertifikat */}
                    <a href={cert.img} target="_blank" rel="noopener noreferrer">
                      <div className="w-full h-64 bg-gray-50 dark:bg-slate-800 overflow-hidden">
                        <img
                          src={cert.img}
                          alt={cert.name}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </a>

                    {/* Info */}
                    <div className="p-4 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.issuer}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${cert.color}`}>
                          {cert.category}
                        </span>
                        <a
                          href={cert.img}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Lihat Fullscreen
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
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
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        project.status === "Selesai"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs bg-blue-50 dark:bg-blue-900 text-blue-500 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
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
        <section id="contact" className="bg-gray-50 dark:bg-slate-800 py-24 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-2">Contact</motion.h2>
              <motion.div variants={fadeUp} className="w-12 h-1 bg-blue-500 mb-8 rounded"></motion.div>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div variants={fadeUp}>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Tertarik untuk berkolaborasi atau sekadar ngobrol soal teknologi? Jangan ragu untuk menghubungi saya!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/adly-248" target="_blank" className="flex items-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/adly-febryan-324b45330/" target="_blank" className="flex items-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                    <a href="https://instagram.com/adlyfebryann_" target="_blank" className="flex items-center gap-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                      Instagram
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <ContactForm />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 dark:border-slate-700 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
          © 2026 Adly Febryan. Made with Next.js & Tailwind CSS.
        </footer>

        {/* Back to Top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

      </main>
    </>
  )
}