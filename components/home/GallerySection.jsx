// GallerySection.jsx
// Photo gallery grid with hover overlays.
// Mobile: 1 column (full-width photos).
// md: 2 columns. lg: 4 columns.
// Each photo has a dark overlay + label that fades in on hover.

import Image from "next/image";

function GalleryCard({ imgSrc, alt, label }) {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg h-52 sm:h-60 md:h-64 shadow-md border border-[#DBE2EF]">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      {/* Overlay with label — invisible by default, fades in on hover */}
      <div className="absolute inset-0 bg-[#112D4E]/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <span className="text-white font-bold text-base sm:text-lg px-4 text-center">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const photos = [
    {
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwGjv7778-T2pRTnY1A0ybbpbQQ5a48Fb_bd0HwIaU5jf9EVh50-mmQTu1N2NoKFss_ScDwwvC989e4YUOpqDFa5vtAYu6XhFX4NSIW4eVR005EEIpj329Vgvl2NkkywvIuSTLMjGGAfFo_w31Mu9N6Fn_v85JppZssi6o01150ulEgM97QBiu2RlAVUFv3FUBOV-KWoT61GL7X0YP6B8Ls8E50De3VOdR9n-lrX4ygmirwvAuKTpiQgDes5zPaq0TiEXvmqBNiAnn",
      alt: "Gallery 1",
      label: "Annual Sports Day",
    },
    {
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnhnQj8qbnmUKF-bnHreEluvvBjN0-O7JAddbubZ_p5m_dFwLlrXnten2faaU0vp98h_0cBq31QnEseKiFrt4GWUJPsb2eIaYj5dxuAan1-uY3Bd_KtALwz3AxycYNtwoxOzORwABGPzrj5nMUwScHTakr0UKhtDgaj6gfyae6-BymFCrG8HPkN8ykc_d_ObOpnyyh7b6q8wyQEAfNxy719-Ep8mo4zbThe0_CwoDJCWF2PJuCMHWEuXKrb5nNbhhiTFjQ3nk91hrI",
      alt: "Gallery 2",
      label: "Science Lab",
    },
    {
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0cECpMotxBNUXDd1xh6B_tnYwCmZFWWwxuhc0723ctIMJFOzzH6NAPAqHLpk1L_bie_vwOAvpoxJugt2DGCXjI0bwqeK2PuMyqp86a0u5TAqiIqy7tF1keYe792LmVKN1iVAxqLZe2Vwjx-DEh5pIdHvZXcMxWOC8ed02D3kTPyuvWodkFSmlgi_-yoDr3xociaMLsKfLLtceUiIhKMBd8l-K9j_EqaVyrNi2Rm_iwh_p7cqQDfN2VjqvhtrkfiWKomZhxX_7WusL",
      alt: "Gallery 3",
      label: "Classroom Activities",
    },
    {
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjiA31krKP7_Rx1xyUesAxCCCMlCidHs6KsWYBosrhlFUm9osugAhu9gtDh8gijCLh6_f0h4k3QqG5u1itLSABkhD9zkxaPjxnfF3p4WYWfQrnBBfc7ZISQuroALTptGc1jQqPmnUP0tP6czJ8vTjqJaqFturAvtLmVJW6ScZMyONB-2XiwlrKGQube_40dFaJRAp8BnI3hkNLmTrtDZJGJ5R4fUx61h4qrAQyCaLpH4jWy7MphfgJoLDFxq5BJ6rDX1DJEGYJ0A3",
      alt: "Gallery 4",
      label: "Graduation Ceremony",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F9F7F7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#112D4E]">
            Photo Gallery
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Glimpses of life at BKSB
          </p>
        </div>

        {/* 1 col → 2 col → 4 col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <GalleryCard key={photo.label} {...photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
