import { Download } from "lucide-react";

export default function ClassSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-24">
      <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-secondary">
            Our Classes
          </h2>
          <p className="text-gray-500 mt-2">
            Comprehensive education from Grade 6 to Grade 10
          </p>
        </div>
        <div className="hidden md:block">
          <button className="text-primary font-medium hover:underline flex items-center gap-1">
            Download Full Brochure <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Class Six Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Students in a classroom setting"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjzTlvpUgh072Emzi221HZkOGFWRfIVdYm-n9mJMux1tm3YHL1llbXqdlgAWW5p66o7-b8fyN7cSZAfk1_Az9ujQ3lp9TDcugl1z8SEcbQ9Bw3qIS7nhHXQ-VowxJFDvNrp5ed5BhDAGAdwqBYhyDznOa4Mm6HxNAYviVrsEpLDmJB11hD5SY155RtGODd1CWnaU4ZFtW1FM2pP4syIzk1Gko8yfD8Vwv2cPrCgYzcxU0zBrrNhKIoOu2o2EM8jiYTbpEqEUCl5701"
            />
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Junior Section
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Class Six
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              Building strong foundations in mathematics and language arts while
              introducing scientific concepts.
            </p>
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Core Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Bengali
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  English
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Math
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Science
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  ICT
                </span>
              </div>
            </div>
            <div className="  mt-auto pt-4 border-t border-gray-100">
              <a
                className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white w-full block text-center  border border-primary text-primary hover:bg-primary  font-medium py-2 rounded-lg transition duration-200"
                href="#"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>

        {/* Class Seven Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Students using tablets"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAik_cRQZe3DXwSLTvfaOu-wND_5vsaNV2QtSSkvhU4LZIy9D9_tpcfW77oWwetof6Cil_6gC0Ns6OIEUBKPxfuR2OaySgAdeI0zqEGIwOyHOe5qcQlKVGaleKgEu2k4bYp-8TvewePoOVpM3qa4N8O1ARqvTm0yVBZHvwjMAj0TS8j3ZKg8TVALBYN9kshJ1DBlrK1rr__ivanKjXLpa76NKVXcnubxQLfI6KXfV0azIZj0RFfFdzkPHBqW9wfGYMlZ95QER3QHwgg"
            />
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Junior Section
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Class Seven
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              Expanding knowledge horizons with intermediate algebra and
              introduction to global history.
            </p>
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Core Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Bengali
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  English
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Algebra
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Biology
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  History
                </span>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white w-full block text-center  border border-primary text-primary hover:bg-primary  font-medium py-2 rounded-lg transition duration-200"
                href="#"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>

        {/* Class Eight Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Library study session"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlQ_bC0S7TqEUU0aN0xXMKxrg0fQ4tlUYg3BxMzZ9neXqG_HidiZCg8aYhLt9V1xRECOvFgH9AWzc-TbZfyWNCqbsDpBatuIHNi5tEnaZ3N2ju95SlrYi24HAFQWhZwZAUa4pBKuKDTo8Q3qMgYgc5p7Qch5wFGRFZByrLP1R966B6X19LxOV0e-DdyqvGkHtuZBZtH0Ax_W_CfiF44fxs7SZP7S3WyO4W1q0O3yB3t7coMnDjqMOKl1ZYPd8s1KYlmsSmCz9jaFYv"
            />
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Junior Section
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Class Eight
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              Preparing for JSC examinations with focused curriculum on
              analytical skills and composition.
            </p>
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Core Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Geometry
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  English Lit
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Physics
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Chemistry
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  Art
                </span>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white w-full block text-center  border border-primary text-primary hover:bg-primary  font-medium py-2 rounded-lg transition duration-200"
                href="#"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Class Nine Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Students discussing a project"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAam1_vGgOz4daS0nG89HDGX2BPEI4RJUx_zBnCAbGWIyFfd_1o0QxkLAJxCJjt7AQ62ywjrir7Ul3QcV8LhtOpSVaF4bTwQd9wwSX9QsdKmDdxDLMjf_8uYLKuPE64qdWgp_Yxey2-d2vPGBTevYZHZO14PRIvYXWxpc2bFSpImZjUNOecR5BrYQz-CGLu1sDLga5e3-ckKITTl2yrRCiGuP9UtEl0sxiwzFZojNbPrIQnlkk3NT3iYziYzSRoTsIGNyFz4cI7zFQ8"
            />
            <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Senior Section
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Class Nine
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              Stream selection (Science, Commerce, Arts) and advanced curriculum
              introduction.
            </p>
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Available Streams
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-primary text-xs px-2 py-1 rounded border border-blue-100">
                  Science
                </span>
                <span className="bg-blue-50 text-primary text-xs px-2 py-1 rounded border border-blue-100">
                  Commerce
                </span>
                <span className="bg-blue-50 text-primary text-xs px-2 py-1 rounded border border-blue-100">
                  Arts
                </span>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white w-full block text-center  border border-primary text-primary hover:bg-primary  font-medium py-2 rounded-lg transition duration-200"
                href="#"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>

        {/* Class Ten Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              alt="Group study"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGywAEWMUjLv0cPhdAQ6nQNpOV3XocvvOL8eraCj8UF0z9LXIjVKLnEOEpo7eFb0TX6w8G6GiCRuQ7edUJKh5XsmvpIgO-XSW3-jeU1TetUhzQbVsM1v97uCuOFhQYSBg8zYlIlO2Oh-aAkILVWFFbcj9P6GnRXrgs63xY6G_y2HyRAT5Efgln93f5ITFAot7eUGEdkZOFcvcLidHWFxghUw2Hw0dImMHBltMc1Y39oVNoLhTWp_GXAhGkJUjF8tg8UXYPaYDE39l9"
            />
            <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Senior Section
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Class Ten
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              Intensive preparation for SSC examinations with mock tests and
              personalized guidance.
            </p>
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded border border-orange-100">
                  SSC Prep
                </span>
                <span className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded border border-orange-100">
                  Model Tests
                </span>
                <span className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded border border-orange-100">
                  Career Guidance
                </span>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white w-full block text-center  border border-primary text-primary hover:bg-primary  font-medium py-2 rounded-lg transition duration-200"
                href="#"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
