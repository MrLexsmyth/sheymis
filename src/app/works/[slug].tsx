import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { artworks, Artwork } from "../../../data/artworks";

interface Props {
  art: Artwork;
}

export default function ArtworkDetail({ art }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Image
        src={art.image}
        alt={art.title}
        width={800}
        height={600}
        className="rounded w-full h-auto"
      />
      <h1 className="text-3xl font-bold mt-4">{art.title}</h1>
      <p className="text-gray-600">{art.medium} • {art.year}</p>
      <p className="mt-4">{art.description}</p>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = artworks.map((art) => ({
    params: { slug: art.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const art = artworks.find((a) => a.slug === params?.slug);
  return {
    props: {
      art,
    },
  };
};

