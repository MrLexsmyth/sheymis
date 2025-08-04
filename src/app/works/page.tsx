"use client";

import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-16 flex justify-center items-center px-4">
      <div className=" mt-16 w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/images/artist.jpeg"
          alt="Logo"
          width={800}
          height={700}
          className="w-full h-auto rounded-lg"
        />

        <h2 className="font-abel font-semibold mt-4 text-center text-lg md:text-xl">
          - Feeds -
        </h2>
      </div>
    </div>
  );
};

export default Page;
