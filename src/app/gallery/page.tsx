"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "../../../data/artworks";
import Modal from "../../../components/Modals";


const Page = () => {

  const [selectedMedium, setSelectedMedium] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredArtworks = artworks.filter((art) => {
    return (
      (selectedMedium ? art.medium === selectedMedium : true) &&
      (selectedYear ? art.year.toString() === selectedYear : true)
    );
  });

  return (
    <div className="mt-16">

       <h1 className="text-4xl font-bold mb4 flex justify-center items-center">Gallery</h1>
     <div className="mt-6 flex justify-center items-center px-4">

      
      <div className=" w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/images/artist.jpeg"
          alt="Logo"
          width={800}
          height={700}
          className="w-full h-auto rounded-lg"
        />
      </div>

    </div>
 <div className="px-6 py-10 max-w-7xl mx-auto">
     

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={selectedMedium}
          onChange={(e) => setSelectedMedium(e.target.value)}
          className="border px-6 py-2"
        >
          <option value="">All Mediums</option>
          <option value="Oil">Oil</option>
          <option value="Acrylic">Acrylic</option>
          {/* Add more */}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border px-6 py-2"
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          {/* Add more */}
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtworks.slice(0, visibleCount).map((art) => (
          <div key={art.slug} className="cursor-pointer">
            <Image
              src={art.image}
              alt={art.title}
              width={400}
              height={400}
              className="object-cover w-full h-[300px] rounded"
              onClick={() => setModalImage(art.image)}
            />
            <h2 className="mt-2 font-semibold text-lg">{art.title}</h2>
            <p className="text-sm text-gray-600">{art.medium} • {art.year}</p>
            <Link href={`/works/${art.slug}`} className="text-blue-500 text-sm">View Details</Link>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredArtworks.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 6)}
          className="mt-8 px-6 py-2 border rounded hover:bg-gray-100"
        >
          Load More
        </button>
      )}

      {/* Modal */}
      {modalImage && (
        <Modal onClose={() => setModalImage(null)}>
          <Image
            src={modalImage}
            alt="Artwork Fullscreen"
            width={800}
            height={800}
            className="w-full max-h-[80vh] object-contain"
          />
        </Modal>
      )}
    </div>
      </div>
  );
};

export default Page;
