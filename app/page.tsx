export default function Home() {
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
    <main className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg tracking-tight">Adly<span className="text-blue-500">.</span></span>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <p className="text-blue-500 font-medium mb-3 text-sm tracking-widest uppercase">Halo, saya</p>
        <h1 className="text-5xl font-bold mb-4 leading-tight">Adly Febryan</h1>
        <p className="text-xl text-gray-500 mb-8 max-w-xl">
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

          <a href="#contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
                <img
                src="/adly.jpg"
                alt="Adly Febryan"
                className="w-56 h-56 rounded-full object-cover border-4 border-blue-100 shadow-md"
                />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Saya adalah siswa <strong>SMK 13 Bandung</strong> jurusan
                <strong> Rekayasa Perangkat Lunak</strong> yang saat ini sedang
                menjalani PKL (Praktik Kerja Lapangan).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Saya memiliki ketertarikan besar di dunia <strong>web development</strong> dan
                selalu antusias mempelajari teknologi-teknologi baru. Saat ini
                saya aktif mengembangkan skill di bidang backend maupun frontend.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">📍</span>
                <span className="text-gray-600">Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">🎓</span>
                <span className="text-gray-600">SMK 13 Bandung — RPL</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">💼</span>
                <span className="text-gray-600">Sedang PKL</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">🚀</span>
                <span className="text-gray-600">Open to opportunities</span>
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
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
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
      <section id="projects" className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8 rounded"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.status === "Selesai"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-blue-50 text-blue-500 px-3 py-1 rounded-full font-medium"
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
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Tertarik untuk berkolaborasi atau sekadar ngobrol soal teknologi?
            Jangan ragu untuk menghubungi saya!
          </p>
          
          <a href="mailto:adlyfebryan0@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Kirim Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-400">
        © 2025 Adly Febryan. Made with Next.js & Tailwind CSS.
      </footer>

    </main>
  );
}