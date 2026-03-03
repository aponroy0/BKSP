// ============================================================
// About Page — B.K.S.B High School
// ============================================================

import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  HeartPulse,
  Lightbulb,
  Mail,
  Mic2,
  Monitor,
  Phone,
  Target,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Footer from "../Footer";
import Navbar from "../navbar/NavBar";
import TopBar from "../TopBar";

// ============================================================
// Section 1 — Hero Banner
// ============================================================
function HeroBanner() {
  return (
    <header className="relative w-full h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdZ2n7rTBQwxGyxq-a9Wf3-nyflMFshJ8uWNqjNUdYXW-bOT7WzXbXfnnuhDam8-hg_2B-9_6s7ImbyTtYnivJYF6AjScewUKZBctkj5380t9LzL4OkBf_b893S0y3pzS8PQLYAQpo2yNMZQP4HyFG3EOt7pkPg3FugPSieVqWJAgsJzo7LmQzT7IRxkkfoDAf0z9ALD0ExgrRZx2GxB4W-Fa9TuU0rtWMbaXYQISBV83mFtKu10TdcEn5iW1losKgMCMMctH1YYX"
          alt="BKSB School Building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#112D4E]/80" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          About B.K.S.B High School
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-[#3F72AF] mx-auto rounded-full mb-4 sm:mb-6" />
        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          A legacy of excellence in education since 2002, fostering holistic
          development and shaping future leaders in Kastashinga.
        </p>
      </div>
    </header>
  );
}

// ============================================================
// Section 2 — Our History
// ============================================================
function OurHistory() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-1">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full bg-[#DBE2EF] rounded-lg z-0" />
            <div className="relative z-10 w-full h-[280px] sm:h-[380px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd1QOyJKsdvpSroRDeASQWKkpX93T8yD7IWdGmahu44GiIDoDg5AM2tGvtug2fQjlN7Q8c4CWeXewD3ie4lHKGDz7WRrTDwDqygFlKnEotn-l9xw5XSMC7OTkzmJbJcKWdcx5Y_FDo-ErSViefGXFg-KglUeqeGf3tCOv_Nf-XVp6kTPp61ywGqCpPTgKpcT_fuoqF5psZVaeJOsYSxlOYo4obWFWgt_44przO78JKmkcN8IzIly0LXweEHvvKaOnYsHSYwj56xeeK"
                alt="BKSB History Photo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 bg-white p-4 sm:p-6 rounded shadow-lg border-l-4 border-[#3F72AF] hidden sm:block">
              <p className=" font-bold text-3xl sm:text-4xl text-[#112D4E] mb-1">
                2002
              </p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
                Foundation Year
              </p>
            </div>
          </div>

          <div className="order-2">
            <span className="text-[#3F72AF] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              Our Heritage
            </span>
            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-[#112D4E] mb-6">
              Building a Tradition of Knowledge &amp; Character
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                Founded in the serene locale of Kastashinga, Jamalpur, B.K.S.B
                High School began as a humble initiative to bring quality
                education to the community. What started with a single building
                and a handful of dedicated teachers has now blossomed into a
                premier educational institution.
              </p>
              <p>
                Over the past two decades, we have remained steadfast in our
                commitment to academic rigor combined with moral values. Our
                alumni have gone on to excel in various fields, carrying the
                torch of BKSB's values across the nation and beyond.
              </p>
              <p>
                Today, we stand proud not just of our academic achievements, but
                of the inclusive, disciplined, and nurturing environment we have
                cultivated for every student who walks through our gates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 — Mission & Vision
// ============================================================
function MissionVision() {
  const cards = [
    {
      Icon: Target,
      title: "Our Mission",
      text: "To provide a dynamic learning environment that encourages critical thinking, creativity, and ethical behavior. We aim to empower students to achieve their full potential, equipping them with the skills and values necessary to contribute positively to society and succeed in a rapidly changing world.",
    },
    {
      Icon: Lightbulb,
      title: "Our Vision",
      text: "To be a center of excellence in education, recognized for nurturing well-rounded individuals who are academically proficient, socially responsible, and morally upright. We envision a future where every student becomes a beacon of knowledge and integrity.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-[#112D4E] text-white p-8 sm:p-10 rounded-lg shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Icon size={80} strokeWidth={1} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex p-3 bg-white/10 rounded-full mb-5 sm:mb-6 text-[#3F72AF]">
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className=" text-2xl sm:text-3xl font-bold mb-4">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 — School Leadership
// ============================================================
function StaffCard({ imgSrc, name, role, bio }) {
  return (
    <div className="group relative bg-white border border-[#DBE2EF] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gray-100">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6 text-center bg-white relative">
        <div className="absolute -top-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3 bg-white px-4 py-2 rounded-full shadow-md">
            <Mail
              size={16}
              className="text-[#3F72AF] hover:text-[#112D4E] cursor-pointer"
            />
            <Phone
              size={16}
              className="text-[#3F72AF] hover:text-[#112D4E] cursor-pointer"
            />
          </div>
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-[#112D4E]">{name}</h3>
        <p className="text-[#3F72AF] font-medium text-sm mt-1">{role}</p>
        <p className="text-gray-500 text-sm mt-3 line-clamp-2">{bio}</p>
      </div>
    </div>
  );
}

function Leadership() {
  const staff = {
    imgSrc: "/Head_Master.png", // Replace with actual image path in the public folder
    name: "Topon Kumar Dey",
    role: "Headmaster",
    bio: "Leading with a vision of discipline and academic rigor for over 15 years.",
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#3F72AF] font-bold tracking-wider uppercase text-xs sm:text-sm">
            Administration
          </span>
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 text-[#112D4E]">
            School Leadership
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Guided by experienced educators and visionaries dedicated to student
            success.
          </p>
        </div>

        {/* Single centered card — photo only inside card, info below */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Photo card */}
            <div className="relative z-10 w-full rounded-lg shadow-xl overflow-hidden h-75 sm:h-95 lg:h-140">
              <Image
                src={staff?.imgSrc}
                alt="Headmaster Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Info card below the photo */}
          <div className="mt-6 text-center w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white border border-[#DBE2EF] rounded-lg shadow-sm px-6 py-6 sm:px-8 sm:py-7">
            <h3 className="font-bold text-xl sm:text-2xl text-[#112D4E]">
              {staff?.name}
            </h3>
            <p className="text-[#3F72AF] font-medium text-base mt-1">
              {staff?.role}
            </p>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-sm mx-auto">
              {staff?.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 — Campus Facilities
// ============================================================
function FacilityCard({ Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-[#DBE2EF] hover:shadow-lg hover:border-[#3F72AF] transition duration-300 group">
      <div className="flex items-center mb-4">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F9F7F7] flex items-center justify-center text-[#3F72AF] group-hover:bg-[#3F72AF] group-hover:text-white transition-colors flex-shrink-0">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="ml-3 sm:ml-4 font-bold text-base sm:text-xl text-[#112D4E] leading-snug">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <a
        href="#"
        className="text-[#3F72AF] text-sm font-bold flex items-center gap-1 group-hover:underline"
      >
        View Gallery
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  );
}

function Facilities() {
  const facilities = [
    {
      Icon: FlaskConical,
      title: "Science Laboratories",
      description:
        "Modern labs for Physics, Chemistry, and Biology equipped with the latest apparatus for practical learning.",
    },
    {
      Icon: BookOpen,
      title: "Central Library",
      description:
        "A vast collection of over 5,000 books, journals, and digital resources to fuel curiosity and research.",
    },
    {
      Icon: Monitor,
      title: "Computer Lab",
      description:
        "High-speed internet enabled workstations offering students hands-on experience with modern technology.",
    },
    {
      Icon: Trophy,
      title: "Sports Complex",
      description:
        "Expansive playground for football and cricket, plus courts for volleyball and badminton.",
    },
    {
      Icon: Mic2,
      title: "Auditorium",
      description:
        "A spacious multipurpose hall for cultural events, seminars, and school assemblies.",
    },
    {
      Icon: HeartPulse,
      title: "Medical Room",
      description:
        "First-aid center with trained staff to attend to immediate health needs of students.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F9F7F7] border-t border-[#DBE2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-[#3F72AF] font-bold tracking-wider uppercase text-xs sm:text-sm">
              Infrastructure
            </span>
            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#112D4E]">
              Campus Facilities
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilities.map((f) => (
            <FacilityCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 6 — Join Our Community CTA
// ============================================================
function JoinCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#112D4E] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#3F72AF]/10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Join Our Community
        </h2>
        <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
          Experience an education that goes beyond textbooks. Become a part of
          the BKSB family and start your journey towards excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-[#112D4E] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 text-sm sm:text-base">
            Apply for Admission
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Default export
// ============================================================
export default function About() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroBanner />
      <OurHistory />
      <MissionVision />
      <Leadership />
      <Facilities />
      <JoinCTA />
      <Footer />
    </main>
  );
}
