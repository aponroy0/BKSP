// Accessibility page — server component
// Sections: Hero → Physical Campus → Digital Accessibility → Learning Support → Help Us Improve → Footer

import {
  Accessibility, // Screen Reader Friendly
  ArrowRightLeft, // Checklist items
  BookMarked, // High Contrast Mode
  CheckCircle2, // Auditory Aids
  CircleDot, // Keyboard Navigation
  Contrast, // Visual Support
  Ear, // Barrier-Free
  Eye, // Sign Language Interpreters
  FileText, // Special Needs Liaison
  Mail, // Diverse Needs
  MonitorSmartphone, // Email Us
  Phone, // IEP
  UserCog, // Adaptive Learning Materials
  Users,
} from "lucide-react";
import CommonHero from "../CommonHero";

// ─── DATA ─────────────────────────────────────────────────────────────────────

// Four icon badges shown in the 2×2 grid beside physical features text
const PHYSICAL_BADGES = [
  {
    Icon: Accessibility,
    label: "Barrier-Free",
    bg: "bg-[#EEF2FF]",
    color: "text-[#3F72AF]",
  },
  {
    Icon: Eye,
    label: "Visual Support",
    bg: "bg-[#EEF2FF]",
    color: "text-[#3F72AF]",
  },
  {
    Icon: Ear,
    label: "Auditory Aids",
    bg: "bg-[#EEF2FF]",
    color: "text-[#3F72AF]",
  },
  {
    Icon: CircleDot,
    label: "Diverse Needs",
    bg: "bg-[#112D4E]",
    color: "text-white",
    dark: true,
  },
];

// Bullet checklist for physical features
const PHYSICAL_LIST = [
  {
    title: "Wheelchair Ramps & Elevators",
    desc: "All building levels and public spaces are accessible via ramps or modern elevators.",
  },
  {
    title: "Accessible Restrooms",
    desc: "Specially designed restrooms with grab bars and wider entrances on every floor.",
  },
  {
    title: "Braille Signage",
    desc: "Room numbers and directional signs include Braille for visually impaired community members.",
  },
];

// Three cards for digital accessibility features
const DIGITAL_FEATURES = [
  {
    Icon: MonitorSmartphone,
    title: "Screen Reader Friendly",
    desc: "Semantic HTML and ARIA labels ensure that assistive technologies can interpret our content accurately.",
  },
  {
    Icon: ArrowRightLeft,
    title: "Keyboard Navigation",
    desc: "All interactive elements are reachable via keyboard, including focus indicators for visibility.",
  },
  {
    Icon: Contrast,
    title: "High Contrast Mode",
    desc: "Our colour palette is carefully selected to provide high contrast ratios for better readability.",
  },
];

// Four support items shown in a 2×2 grid inside the dark Learning Support card
const LEARNING_SUPPORT = [
  { Icon: BookMarked, label: "Adaptive Learning Materials" },
  { Icon: Users, label: "Sign Language Interpreters" },
  { Icon: FileText, label: "Individualized Education Plans (IEP)" },
  { Icon: UserCog, label: "Dedicated Special Needs Liaison" },
];

// Footer columns
const QUICK_LINKS = [
  "About Us",
  "Academics",
  "Admissions",
  "Notice Board",
  "News & Updates",
];
const POLICY_LINKS = [
  "Accessibility",
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Anti-Bullying Policy",
];

// ─── SHARED COMPONENT ────────────────────────────────────────────────────────

function SectionHeader({ label, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 sm:mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block bg-[#DBE2EF] text-[#112D4E] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          {label}
        </span>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#112D4E]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Physical campus: text + checklist left, 2×2 icon badge grid right
function PhysicalCampus() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: heading, paragraph, checklist */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112D4E] mb-4">
              Physical Campus Features
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7">
              Our campus is designed to be barrier-free, ensuring that all
              physical spaces are reachable and usable by everyone. We
              continuously update our infrastructure to meet and exceed local
              accessibility standards.
            </p>

            {/* Checklist */}
            <ul className="space-y-5">
              {PHYSICAL_LIST.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#3F72AF] flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div>
                    <p className="font-bold text-[#112D4E] text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: 2×2 icon badge grid */}
          <div className="grid grid-cols-2 gap-4">
            {PHYSICAL_BADGES.map(({ Icon, label, bg, color, dark }) => (
              <div
                key={label}
                className={`${bg} rounded-xl p-6 flex flex-col items-center justify-center gap-3 border ${dark ? "border-[#3F72AF]/30" : "border-[#DBE2EF]"}`}
              >
                <Icon size={32} className={color} strokeWidth={1.5} />
                <span
                  className={`text-sm font-semibold ${dark ? "text-white" : "text-[#112D4E]"}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Digital accessibility: centred heading + 3 feature cards
function DigitalAccessibility() {
  return (
    <section className="py-14 sm:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Digital Accessibility"
          subtitle="We strive to make our website accessible to people of all abilities. Our digital content is built following the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards."
        />

        {/* 1 col → 3 cols md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {DIGITAL_FEATURES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-[#DBE2EF] p-6 sm:p-7 shadow-sm"
            >
              {/* Icon badge */}
              <div className="w-11 h-11 bg-[#EEF2FF] rounded-lg flex items-center justify-center mb-4">
                <Icon size={22} className="text-[#3F72AF]" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-[#112D4E] text-sm sm:text-base mb-2">
                {title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Specialized Learning Support: large blue-to-navy two-panel card
function LearningSupport() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5 shadow-xl">
          {/* Left dark panel with large users icon */}
          <div className="md:col-span-2 bg-[#3F72AF] flex items-center justify-center py-12 px-8">
            <Users
              size={80}
              className="text-white opacity-80"
              strokeWidth={1}
            />
          </div>

          {/* Right navy panel with text and 2×2 grid */}
          <div className="md:col-span-3 bg-[#112D4E] p-8 sm:p-10">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Specialized Learning Support
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Beyond physical infrastructure, B.K.S.B High School provides
              tailored educational support including:
            </p>

            {/* 2×2 support items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LEARNING_SUPPORT.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3"
                >
                  <Icon
                    size={18}
                    className="text-[#DBE2EF] flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Help Us Improve: centred heading + two contact cards (Email / Call)
function HelpImprove() {
  return (
    <section className="py-14 sm:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Help Us Improve"
          subtitle="If you encounter any accessibility barriers on our campus or website, please let us know. We are committed to continuous improvement."
        />

        {/* Two contact cards side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {/* Email card */}
          <div className="bg-white rounded-xl border border-[#DBE2EF] p-7 sm:p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={22} className="text-[#3F72AF]" strokeWidth={1.75} />
            </div>
            <h3 className="font-bold text-[#112D4E] text-base sm:text-lg mb-1">
              Email Us
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              Send us your feedback
            </p>
            <a
              href="mailto:accessibility@bksb.edu.bd"
              className="text-[#3F72AF] font-semibold text-sm hover:underline"
            >
              accessibility@bksb.edu.bd
            </a>
          </div>

          {/* Call card */}
          <div className="bg-white rounded-xl border border-[#DBE2EF] p-7 sm:p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={22} className="text-[#3F72AF]" strokeWidth={1.75} />
            </div>
            <h3 className="font-bold text-[#112D4E] text-base sm:text-lg mb-1">
              Call Us
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              Speak with our coordinator
            </p>
            <a
              href="tel:+8801712345678"
              className="text-[#3F72AF] font-semibold text-sm hover:underline"
            >
              +880 1712 – 345678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DEFAULT EXPORT ───────────────────────────────────────────────────────────
export default function AccessibilityPage() {
  return (
    <main>
      <CommonHero
        title="Accessibility"
        subtitle="We are committed to providing an inclusive environment for all students, staff, and visitors."
        description="At B.K.S.B High School, we believe that education should be accessible to everyone.
          We are dedicated to providing inclusive physical and digital environments where every
          student, visitor, and staff member can thrive regardless of their abilities."
      />
      <PhysicalCampus />
      <DigitalAccessibility />
      <LearningSupport />
      <HelpImprove />
    </main>
  );
}
