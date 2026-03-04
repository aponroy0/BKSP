import {
  BookOpen, // Arabic Class
  FlaskConical,
  Mic, // Arts Club
  Music, // Debate Club
  Palette, // Activity Learning
  Shield,
} from "lucide-react";

// Gallery images — 4 photos, first one is tall (row-span-2)
const GALLERY_IMGS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd1QOyJKsdvpSroRDeASQWKkpX93T8yD7IWdGmahu44GiIDoDg5AM2tGvtug2fQjlN7Q8c4CWeXewD3ie4lHKGDz7WRrTDwDqygFlKnEotn-l9xw5XSMC7OTkzmJbJcKWdcx5Y_FDo-ErSViefGXFg-KglUeqeGf3tCOv_Nf-XVp6kTPp61ywGqCpPTgKpcT_fuoqF5psZVaeJOsYSxlOYo4obWFWgt_44przO78JKmkcN8IzIly0LXweEHvvKaOnYsHSYwj56xeeK",
    alt: "Students collaborating",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwGjv7778-T2pRTnY1A0ybbpbQQ5a48Fb_bd0HwIaU5jf9EVh50-mmQTu1N2NoKFss_ScDwwvC989e4YUOpqDFa5vtAYu6XhFX4NSIW4eVR005EEIpj329Vgvl2NkkywvIuSTLMjGGAfFo_w31Mu9N6Fn_v85JppZssi6o01150ulEgM97QBiu2RlAVUFv3FUBOV-KWoT61GL7X0YP6B8Ls8E50De3VOdR9n-lrX4ygmirwvAuKTpiQgDes5zPaq0TiEXvmqBNiAnn",
    alt: "Art class activity",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0cECpMotxBNUXDd1xh6B_tnYwCmZFWWwxuhc0723ctIMJFOzzH6NAPAqHLpk1L_bie_vwOAvpoxJugt2DGCXjI0bwqeK2PuMyqp86a0u5TAqiIqy7tF1keYe792LmVKN1iVAxqLZe2Vwjx-DEh5pIdHvZXcMxWOC8ed02D3kTPyuvWodkFSmlgi_-yoDr3xociaMLsKfLLtceUiIhKMBd8l-K9j_EqaVyrNi2Rm_iwh_p7cqQDfN2VjqvhtrkfiWKomZhxX_7WusL",
    alt: "Music instruments",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjiA31krKP7_Rx1xyUesAxCCCMlCidHs6KsWYBosrhlFUm9osugAhu9gtDh8gijCLh6_f0h4k3QqG5u1itLSABkhD9zkxaPjxnfF3p4WYWfQrnBBfc7ZISQuroALTptGc1jQqPmnUP0tP6czJ8vTjqJaqFturAvtLmVJW6ScZMyONB-2XiwlrKGQube_40dFaJRAp8BnI3hkNLmTrtDZJGJ5R4fUx61h4qrAQyCaLpH4jWy7MphfgJoLDFxq5BJ6rDX1DJEGYJ0A3",
    alt: "Self-defense training",
    tall: false,
  },
];

// Six activity cards shown in a 3-col grid
const ACTIVITIES = [
  {
    Icon: Mic,
    title: "Debate Club",
    desc: "Master the art of persuasion and critical thinking through structured arguments and competitions.",
    color: "text-[#3F72AF]",
    bg: "bg-blue-50",
  },
  {
    Icon: Palette,
    title: "Arts Club",
    desc: "Unleash creativity through painting, sculpture, and digital media projects in our studio.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    Icon: Music,
    title: "Music Class",
    desc: "From classical voices to modern instruments, discover your rhythm and perform in ensembles.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    Icon: BookOpen,
    title: "Arabic Class",
    desc: "Explore the beauty of the Arabic language and literature in an engaging cultural setting.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    Icon: FlaskConical,
    title: "Activity Learning",
    desc: "Hands-on learning experiences focusing on STEM, robotics, and problem-solving skills.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    Icon: Shield,
    title: "Self-defense Class",
    desc: "Build physical strength, discipline, and awareness through professional martial arts training.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

// Schedule table rows
const SCHEDULE = [
  {
    name: "Debate Club",
    days: "Mondays",
    time: "3:00 PM – 4:00 PM",
    location: "Seminar Hall 1",
  },
  {
    name: "Arts Club",
    days: "Tuesdays & Thursdays",
    time: "3:30 PM – 5:00 PM",
    location: "Art Studio",
  },
  {
    name: "Music Class",
    days: "Wednesdays",
    time: "3:00 PM – 4:30 PM",
    location: "Music Room 4B",
  },
  {
    name: "Arabic Class",
    days: "Sundays",
    time: "10:00 AM – 12:00 PM",
    location: "Room 201",
  },
  {
    name: "Activity Learning",
    days: "Fridays",
    time: "9:00 AM – 11:30 AM",
    location: "STEM Lab",
  },
  {
    name: "Self-defense",
    days: "Mondays & Wednesdays",
    time: "4:00 PM – 5:30 PM",
    location: "Gymnasium",
  },
];

export { ACTIVITIES, GALLERY_IMGS, SCHEDULE };
