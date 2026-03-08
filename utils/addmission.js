export function getAdmissionHeading(locale = "en") {
  const year = new Date().getFullYear();

  if (locale === "bn") {
    // English number to Bangla number convert
    const toBanglaNumber = (num) => {
      const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return String(num)
        .split("")
        .map((d) => banglaDigits[d] ?? d)
        .join("");
    };
    return `${toBanglaNumber(year)}–${toBanglaNumber(year + 1)}`;
  }

  return `${year}–${year + 1}`;
}
