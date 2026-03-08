import {
  BookOpen,
  FlaskConical,
  MonitorPlay,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";

const FACILITIES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    imageAlt: "Smart classroom with interactive board",
    Icon: MonitorPlay,
    title: "Smart Classrooms",
    description:
      "Modern learning spaces equipped with interactive smart boards and digital resources for an immersive educational experience.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    imageAlt: "Science and IT laboratory",
    Icon: FlaskConical,
    title: "Science & IT Labs",
    description:
      "Fully equipped high-tech laboratories for physics, chemistry, biology, and advanced computer science research.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80",
    imageAlt: "School digital library",
    Icon: BookOpen,
    title: "Digital Library",
    description:
      "A peaceful sanctuary of knowledge with over 20,000 books and a comprehensive digital archive system.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
    imageAlt: "Sports complex and playground",
    Icon: Trophy,
    title: "Sports Complex",
    description:
      "Lush green fields and professional-grade courts for football, cricket, basketball, and various athletic activities.",
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
    imageAlt: "School canteen dining area",
    Icon: UtensilsCrossed,
    title: "Modern Canteen",
    description:
      "A hygienic and spacious dining area serving nutritious meals designed by professional nutritionists.",
  },
];

export { FACILITIES };
