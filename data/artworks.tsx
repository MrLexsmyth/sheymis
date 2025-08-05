export interface Artwork {
  id: number;
  title: string;
  slug: string;
  image: string;
  year: number;
  medium: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Reflections",
    slug: "reflections",
    image: "/images/slide2.jpg",
    year: 2024,
    medium: "Acrylic",
    description: "An expressive view of solitude and thought."
  },
  {
    id: 2,
    title: "Blooming Colors",
    slug: "blooming-colors",
    image: "/images/slide1.jpg",
    year: 2023,
    medium: "Oil",
    description: "A vibrant explosion of nature’s palette."
  },
    {
    id: 3,
    title: "Reflects",
    slug: "reflect",
    image: "/images/slide3.jpg",
    year: 2025,
    medium: "Acrylic",
    description: "An expressive view of solitude and thought."
  },
  {
    id: 4,
    title: "Blooming ",
    slug: "blooming",
    image: "/images/slide4.jpg",
    year: 2026,
    medium: "Oil",
    description: "A vibrant explosion of nature’s palette."
  },
  // add more artworks
];
