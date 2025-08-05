"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AcademyPage() {
  return (
    <main className="px-6 md:px-20 py-16 max-w-7xl mx-auto mt-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Header Section */}
        <motion.div variants={childVariants} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sheymis_Art Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light">
            Learn to draw and paint in a creative and supportive environment —
            for kids, teens, adults, and seniors.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div variants={childVariants} className="flex justify-center">
          <Image
            src="/images/academy.jpg"
            alt="Art Academy"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Program Highlights */}
        <motion.div variants={childVariants}>
          <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
          <ul className="space-y-3 text-gray-700 font-light">
            <li>🎨 Beginner to advanced drawing & painting classes</li>
            <li>🧒 Age-specific groups: Kids (6–12), Teens, Adults, and Seniors</li>
            <li>🖌️ Mediums include pencil, acrylic, oil, watercolor, digital</li>
            <li>📅 Weekly and weekend classes</li>
            <li>🏅 Certificate of completion for every level</li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={childVariants}
          className="text-center mt-10 space-y-4"
        >
          <p className="text-lg md:text-xl font-light text-gray-800">
            Ready to unlock your inner artist?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Contact Us to Enroll
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
