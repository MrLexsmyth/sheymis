"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-black px-6 py-2 font-abel font-semibold">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        
       <Link href="/">
               <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={80}
                  className="cursor-pointer w-32 md:w-48" 
                />
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:underline transition">About</Link>
          <Link href="/works" className="hover:underline transition">Works</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>

          <a href="https://www.tiktok.com/@sheymis_art_?_t=ZS-8ya6PNkj4Cn&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <div
                dangerouslySetInnerHTML={{
                  __html: `
                   <lord-icon
                      src="https://cdn.lordicon.com/kciljrmc.json"
                      trigger="hover"
                      state="hover-dots"
                     stroke="light"
                     style="width:25px;height:25px">
                   </lord-icon>`,
                }}
              />
          </a>
          <a href="https://www.instagram.com/sheymis_art?igsh=MWdzbmc3MDIzbzM5aQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
             <div
                dangerouslySetInnerHTML={{
                  __html: `
                   <lord-icon
                       src="https://cdn.lordicon.com/dbugezxr.json"
                       trigger="hover"
                       stroke="light"
                       state="hover-rotate"
                     style="width:25px;height:25px">
                   </lord-icon>`,
                }}
              />
          </a>
          <a href="https://wa.me/2349164570736" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
             <div
                dangerouslySetInnerHTML={{
                  __html: `
                   <lord-icon
                       src="https://cdn.lordicon.com/edecmgef.json"
                       trigger="hover"
                       state="hover-draw"
                     stroke="light"
                     style="width:25px;height:25px">
                   </lord-icon>`,
                }}
              />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6 flex flex-col space-y-4 bg-white text-black shadow-lg h-[100vh] py-6">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline mt-4">About</Link>
          <Link href="/works" onClick={() => setMenuOpen(false)} className="hover:underline">Works</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</Link>

          <div className="flex space-x-4 pt-2 mt-4">
            <a href="https://www.tiktok.com/@sheymis_art_?_t=ZS-8ya6PNkj4Cn&_r=1" target="_blank" rel="noopener noreferrer">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                   <lord-icon
                      src="https://cdn.lordicon.com/kciljrmc.json"
                      trigger="hover"
                      state="hover-dots"
                     stroke="light"
                     style="width:30px;height:30px">
                   </lord-icon>`,
                }}
              />
            </a>
            <a href="https://www.instagram.com/sheymis_art?igsh=MWdzbmc3MDIzbzM5aQ==" target="_blank" rel="noopener noreferrer">
               <div
                dangerouslySetInnerHTML={{
                  __html: `
                   <lord-icon
                       src="https://cdn.lordicon.com/dbugezxr.json"
                       trigger="hover"
                       stroke="light"
                       state="hover-rotate"
                     style="width:30px;height:30px">
                   </lord-icon>`,
                }}
              />
            </a>
            <a href="https://wa.me/2349164570736" target="_blank" rel="noopener noreferrer">
               <div
                dangerouslySetInnerHTML={{
                  __html: `
                   <lord-icon
                       src="https://cdn.lordicon.com/edecmgef.json"
                       trigger="hover"
                       state="hover-draw"
                     stroke="light"
                     style="width:30px;height:30px">
                   </lord-icon>`,
                }}
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
