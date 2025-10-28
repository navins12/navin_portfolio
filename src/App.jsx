import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';

/* Content text (from you) */
const CONTENT = {
  About: (
    <>
      <p className="text-gray-200">
        Hi I am <strong>Navin S</strong>.<br />
        To secure a position in the Embedded Systems industry where I can apply my skills in
        microcontroller programming, embedded C, and hardware interfacing, while continuously learning new
        technologies and contributing to innovative and impactful embedded solutions.
      </p>
    </>
  ),

  Projects: (
    <div className="text-left space-y-3">
      <div>
        <h3 className="font-semibold text-matte">Smart Bridge using Arduino UNO</h3>
        <p className="text-gray-200 text-sm">
          Developed a smart automated bridge system using Arduino UNO and ultrasonic sensors to detect rising
          water levels and lift the bridge automatically. Integrated LED indicators, a buzzer, and a motorized
          mechanism for enhanced flood prevention and safety.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-matte">Location sharing kit for woman safety using IOT</h3>
        <p className="text-gray-200 text-sm">
          Developed an IoT-based women's safety device integrating GPS, GSM, and an emergency alert system for
          real-time location tracking. Ensured rapid response through cloud connectivity and mobile notifications
          for enhanced security.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-matte">Efficient Low-Power ALU Design Using Operand Isolation</h3>
        <p className="text-gray-200 text-sm">
          Implemented operand isolation to suppress unnecessary switching activities in inactive ALU units,
          achieving reduced dynamic power consumption and improved overall energy efficiency.
        </p>
      </div>
    </div>
  ),

  Internship: (
    <div className="text-left">
      <p className="font-semibold text-gray-100">EDIGLOBE, Bengaluru (1st Feb 2025 – 30th Mar 2025)</p>
      <p className="italic text-gray-300 text-sm">Domain: VLSI Design and Verification</p>
      <p className="text-gray-200 mt-2">
        Worked on fundamentals of digital design, HDL coding, and functional verification. Gained hands-on exposure
        to simulation tools, testbench creation used in VLSI design flow.
      </p>
    </div>
  ),

  Certificates: (
    <ul className="list-disc list-inside text-left space-y-1 text-gray-200">
      <li>
        Participated in a Hackathon on ‘ADAS ECU Simulation and Testing’, conducted under the Naan Mudhalvan Scheme
        by Tamil Nadu Skill Development Corporation on 21st May 2025 — recognized for outstanding creativity, problem-solving skills, and dedication.
      </li>
      <li>Machine Learning for Beginners — Simplilearn | SkillUp.</li>
      <li>Completed VLSI Verilog — Ediglobe, Bangalore.</li>
      <li>Completed Cisco Packet Tracer — Naan Mudhalvan.</li>
      <li>Participated in AMD AI CHALLENGE WORKSHOP — Shooting Stars Foundation.</li>
      <li>Participated in Dr. Kalam Young Achiever Awards 2025 — World Youth Federation.</li>
    </ul>
  ),

  Contact: (
    <div className="text-left">
      <p className="text-gray-200">📧 navins122004@gmail.com</p>
      <p className="text-gray-200">📱 +91 9361681399</p>
      <p className="text-gray-200">📍 Karur, Tamil Nadu</p>
      <div className="flex gap-3 mt-4">
        <a
          href="/Navin_resume_new.pdf"
          download
          className="btn-gold px-4 py-2 rounded-full font-semibold inline-flex items-center gap-2"
          style={{ background: undefined }}
        >
          <Download size={16} /> Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/navin-s122004"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0a66c2] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 font-semibold"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </div>
  )
};

/* small helper for matte gold class inside JSX */
const Matte = ({ children }) => <span style={{ color: '#d4af37' }}>{children}</span>;

export default function App() {
  const tabs = ['About', 'Projects', 'Internship', 'Certificates', 'Contact'];
  const [active, setActive] = useState('About');

  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen app-bg flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/photo.jpg"
            alt="Navin S"
            className="w-36 h-36 rounded-full avatar-glow border-4 border-[rgba(212,175,55,0.12)] object-cover"
          />
          <motion.h1
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="text-3xl font-extrabold mt-4 text-[var(--matte-gold)]"
          >
            Navin S
          </motion.h1>
          <motion.p
            initial={{ y: -4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.16 }}
            className="text-gray-300 mt-1"
          >
            Embedded Systems Engineer | Electronics Engineer
          </motion.p>
          <motion.p className="text-gray-400 text-sm mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Karur, Tamil Nadu
          </motion.p>
        </div>

        {/* Navigation Buttons (horizontal) */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2 rounded-full font-semibold transition ${active === t ? 'btn-gold' : 'btn-inactive'
                }`}
              aria-pressed={active === t}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Card area: animate content switch */}
        <div className="mt-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="card-backdrop p-6 rounded-2xl border border-[rgba(212,175,55,0.06)] shadow-xl"
            >
              {/* Title for section */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold" style={{ color: '#d4af37' }}>{active}</h2>
                {/* small action area */}
                <div className="text-sm text-gray-300">
                  <span>{active === 'Contact' ? '' : ''}</span>
                </div>
              </div>

              {/* Animated Body */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="mx-auto max-w-3xl">
                  {CONTENT[active] || <p className="text-gray-200">No content.</p>}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Navin S — Embedded Systems Engineer
        </footer>
      </div>
    </div>
  );
}
