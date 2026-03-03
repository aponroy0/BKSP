// SSR page — no "use client" needed
import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Rocket,
  Upload,
  UserPlus,
} from "lucide-react";
import ApplyHero from "./ApplyHero";

const STEPS = [
  {
    num: "01",
    Icon: UserPlus,
    title: "Online Registration",
    body: "Start by creating a parent/guardian account on our secure admission portal. You will receive a verification email to activate your account and set up your login credentials.",
  },
  {
    num: "02",
    Icon: FileText,
    title: "Form Submission",
    body: "Access the 'Apply to BKSB' dashboard. Fill out the comprehensive application form including student details, parental information, and emergency contacts.",
  },
  {
    num: "03",
    Icon: Upload,
    title: "Document Upload",
    body: "Upload high-quality scans of required documents. Ensure all files are in PDF or JPEG format and do not exceed 2MB per file for a smooth processing experience.",
  },
  {
    num: "04",
    Icon: ClipboardCheck,
    title: "Admission Test",
    body: "Once documents are verified, you will be invited for a campus visit. The student will undergo a basic assessment test followed by a brief interaction with the faculty.",
  },
];

const CHECKLIST = [
  "Student's Birth Certificate (Digital/Scan)",
  "Recent Passport Sized Photographs (4 copies)",
  "Previous School Academic Records/Transcripts",
  "Guardian's National ID (NID) or Passport",
  "Transfer Certificate (for mid-year admissions)",
];

function StepsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-10 ">
        {STEPS.map(({ num, Icon, title, body }, i) => (
          <div key={num} className="flex gap-6 md:gap-8">
            {/* Left: icon + connector line */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 shrink-0 rounded-full border-2 border-[#3F72AF]/40 bg-[#EBF2FB] flex items-center justify-center">
                <Icon size={22} className="text-[#3F72AF]" />
              </div>
              {/* Vertical connector — skip after last step */}
              {i < STEPS.length - 1 && (
                <div className="w-px flex-1 bg-gray-200 my-3 min-h-[40px]" />
              )}
            </div>

            {/* Right: content */}
            <div className={`pb-12 ${i < STEPS.length - 1 ? "" : "pb-0"}`}>
              <p className="text-xs font-bold text-[#3F72AF] tracking-widest mb-1">
                {num}.
              </p>
              <h3 className="text-xl font-bold text-[#112D4E] mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChecklistSection() {
  return (
    <section className="py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: checklist */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold font-serif text-[#112D4E] mb-4">
              Document Checklist
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Please ensure you have digital copies of these documents ready
              before starting the application to ensure a quick process.
            </p>
            <ul className="space-y-4">
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#3F72AF] shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-[#EBF2FB] rounded-full flex items-center justify-center">
                <Rocket size={28} className="text-[#3F72AF]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#112D4E] mb-3">
                Ready to Start?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-xs mx-auto">
                Applications for the upcoming session are now open. Start your
                application today and shape a bright future.
              </p>
              <a
                href="#"
                className="block w-full bg-[#3F72AF] hover:bg-[#2f5a8e] text-white font-bold py-3.5 rounded-xl shadow-lg transition text-sm mb-3"
              >
                Start Application Now
              </a>
              <p className="text-gray-400 text-xs">
                Takes approximately 15 minutes to complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Page (SSR — no "use client") ---
export default function Apply() {
  return (
    <div className="min-h-screen bg-[#F9F7F7] font-sans antialiased text-[#112D4E]">
      <ApplyHero />
      <StepsSection />
      <ChecklistSection />
    </div>
  );
}
