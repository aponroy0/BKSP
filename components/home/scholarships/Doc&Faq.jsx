import { Download, FileText } from "lucide-react";
export default function DocFaq() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Required Documents */}
        <div>
          <h3 className="text-xl font-bold mb-8">Required Documents</h3>

          <div className="space-y-4">
            <DocumentItem
              title="Previous Academic Transcript"
              sub="Official sealed copy or digital equivalent"
            />
            <DocumentItem
              title="Income Verification Certificate"
              sub="Only required for Financial Aid applicants"
            />
            <DocumentItem
              title="Personal Statement Form"
              sub="Template provided for self-introduction (500 words)"
            />
            <DocumentItem
              title="Extracurricular Certificates"
              sub="Optional: Any notable awards or achievements"
            />
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-bold mb-8">Application FAQ</h3>

          <div className="space-y-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold mb-2 text-black">
                Who is eligible for the Merit Scholarship?
              </h4>
              <p>
                Students with a minimum GPA of 4.50 in their previous final
                examination are eligible to apply. Final selection is based on
                interview and internal assessment test.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-black">
                When is the deadline for application?
              </h4>
              <p>
                The application window opens twice a year. For the 2024 academic
                session, the deadline is October 15th, 2023.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-black">
                Can I apply for multiple scholarships?
              </h4>
              <p>
                No. Students are encouraged to apply for the one scholarship
                that best fits their profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentItem({ title, sub }) {
  return (
    <div className="flex items-center justify-between bg-[#f7f7f7] p-4 rounded-lg hover:bg-gray-200 transition">
      <div className="flex items-start gap-3">
        <FileText size={18} className="text-red-500 mt-1" />
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs text-gray-500">{sub}</p>
        </div>
      </div>
      <Download size={18} className="text-gray-400 hover:text-[#3F72AF]" />
    </div>
  );
}
