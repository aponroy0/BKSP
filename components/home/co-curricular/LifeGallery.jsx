import { GALLERY_IMGS } from "@/Db/coCurricular";
import Image from "next/image";

export default function LifeGallery() {
  return (
    <section className="py-14 sm:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Row: heading left, "View Full Gallery" link right */}
        <div className="flex justify-between items-end mb-6 sm:mb-8">
          <div>
            <h2 className=" text-2xl sm:text-3xl font-bold text-[#112D4E]">
              Life at BKSB
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Moments of joy, learning, and achievement.
            </p>
          </div>
          <a
            href="#"
            className="text-[#3F72AF] text-sm font-semibold hover:underline whitespace-nowrap ml-4"
          >
            View Full Gallery
          </a>
        </div>

        {/* Gallery grid:
                - Mobile: 1 column stack
                - sm+: first image spans 2 rows (tall), other 3 fill the right column */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          style={{ gridTemplateRows: "auto" }}
        >
          {/* Large tall image — spans 2 rows on sm+ */}
          <div className="relative sm:row-span-2 h-56 sm:h-full min-h-60 rounded-xl overflow-hidden">
            <Image
              src={GALLERY_IMGS[0].src}
              alt={GALLERY_IMGS[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* Three smaller images stacked on the right */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
            {GALLERY_IMGS.slice(1).map((img) => (
              <div
                key={img.alt}
                className="relative h-36 sm:h-44 rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
