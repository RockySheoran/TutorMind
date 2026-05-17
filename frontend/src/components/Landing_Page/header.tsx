"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Link } from "lucide-react";
import { useRouter } from "next/navigation";
// Header Component
function Header() {
  const router = useRouter();
  return (
    <header className="w-full py-16 flex flex-col items-center justify-center text-center px-4 bg-white/40 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl my-8 mx-auto max-w-4xl shadow-2xl border border-blue-100 dark:border-green-800">
      <div className="mb-8">
        <motion.div
          className="relative w-32 h-32 bg-white/80 dark:bg-gray-900/80 rounded-3xl flex items-center justify-center shadow-lg border-2 border-blue-300 dark:border-green-700 p-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/Logo3.png"
            alt="TutorMind Logo"
            width={120}
            height={120}
            className="rounded-2xl object-contain"
            priority
          />
        </motion.div>
      </div>
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600 mb-6 tracking-tight drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to TutorMind
      </motion.h1>
      <motion.p
        className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your AI-powered study companion that helps you learn smarter, not
        harder. From summarizing complex PDFs to preparing for interviews,
        TutorMind has you covered.
      </motion.p>
      <motion.button
        onClick={() => router.push("/signup")}
        className="flex mt-8 items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-8 rounded-2xl hover:shadow-xl transition-all duration-200 font-semibold text-lg border border-blue-400 shadow-lg"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started <ArrowRight size={20} />
      </motion.button>
    </header>
  );
}

export default Header;
