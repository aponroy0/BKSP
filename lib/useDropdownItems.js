"use client";

import { useLocale } from "next-intl";

export function useDropdownItems() {
  const locale = useLocale();

  const DROPDOWN_ITEMS = [
    {
      label: "Academics",
      links: [
        { label: "Classes", href: `/${locale}/classes` },
        { label: "Teachers", href: `/${locale}/teachers` },
      ],
    },
    {
      label: "Admissions",
      links: [
        { label: "Apply to BKSB", href: `/${locale}/apply` },
        { label: "Campus Tour", href: `/${locale}/campus` },
        { label: "Scholarships", href: `/${locale}/scholarships` },
        { label: "Events", href: `/${locale}/events/all-events` },
        { label: "Alumni", href: `/${locale}/alumni` },
      ],
    },
    {
      label: "Student Life",
      links: [
        { label: "Accessibility", href: `/${locale}/accessibility` },
        {
          label: "Co-curricular Activities",
          href: `/${locale}/co-curricular-activities`,
        },
      ],
    },
  ];

  return DROPDOWN_ITEMS;
}
