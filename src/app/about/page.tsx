"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <motion.section
      className="px-6 py-20 max-w-4xl mx-auto text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 font-abel"
        variants={childVariants}
      >
        About Us
      </motion.h1>

      {/* Intro Paragraphs */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 leading-relaxed font-light"
        variants={childVariants}
      >
        Welcome to Sheymis_Art Gallery — a sanctuary of creativity, color, and imagination, 
        showcasing the captivating works of Sheymis. This gallery is a personal expression of
         her artistic journey, curated for art lovers and collectors who seek meaning, beauty, and inspiration.
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 font-light"
        variants={childVariants}
      >
       At the core of Sheymis_Art Gallery is a commitment to authenticity and storytelling through art. 
       Every piece you encounter here is a reflection of Sheymis’s unique vision — created to inspire, evoke emotion, and spark conversation.
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 font-light"
        variants={childVariants}
      >
        From paintings and illustrations to digital art and mixed media, each
        piece in our collection tells a story. We invite you to explore, feel,
        and be inspired.
      </motion.p>

      <motion.p
        className="text-sm text-gray-500 mt-12 font-medium"
        variants={childVariants}
      >
        — The Gallery Team
      </motion.p>

      {/* Our Vision */}
      <motion.div className="mt-20" variants={childVariants}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-abel">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          We envision a world where art is not limited by borders — where every
          artist has the freedom to express, and every observer finds a piece
          that speaks to their soul. We believe in the transformative power of
          art and its ability to connect people across cultures and experiences.
        </p>
      </motion.div>

      {/* Meet the Artists */}
      <motion.div className="mt-20" variants={childVariants}>
       
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Our gallery proudly showcases works from a diverse group of
          painters, illustrators, digital creators, and mixed media artists —
          each bringing their unique voice and technique to the canvas. Get to
          know the visionaries behind the masterpieces.
        </p>
      </motion.div>
      
      {/* Meet the Artist */}
      <motion.div
        className="mt-20 flex flex-col items-center gap-6 text-center"
        variants={childVariants}
      >
        <h2 className="text-3xl md:text-4xl font-semibold font-abel">
          Meet the Artist
        </h2>

        {/* Artist Image */}
        <Image
          src="/images/meettheartist.png"
          alt="Artist Portrait"
          width={400}
          height={400}
          className=" object-cover"
        />

        {/* Artist Bio */}
        <p className="text-lg text-gray-700 leading-relaxed font-light max-w-xl">
          Hi, I’m <span className="font-semibold text-red-500 ">Oluwasemiloore Antonia</span>, a visual
          artist, art tutor and creative soul passionate about capturing emotion,
          culture, and humanity through every stroke and shade. My work is a
          reflection of my journey — inspired by people, dreams, faith, and the
          unseen details of everyday life. Thank you for letting me share a part
          of myself with you through my art.
        </p>


        
        {/* Contact Button */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-black text-white px-6 py-3 rounded-full font-medium transition"
          >
            Contact the Artist
          </motion.button>
        </Link>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-6 text-2xl text-gray-700">
          <a
            href="https://www.instagram.com/sheymis_art?igsh=MWdzbmc3MDIzbzM5aQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-black transition" />
          </a>
          <a
            href="https://www.tiktok.com/@sheymis_art_?_t=ZS-8ya6PNkj4Cn&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FaTiktok className="hover:text-black transition" />
          </a>
          <a
            href="https://wa.me/2349164570736"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaWhatsapp className="hover:text-black transition" />
          </a>
           <a
            href="https://wa.me/2349164570736"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaFacebook className="hover:text-black transition" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
