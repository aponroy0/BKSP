/**
 * Returns academic year string e.g. "2024 – 2025"
 * Logic: if current month < July (0–5) → startYear = thisYear - 1
 *        if current month >= July (6–11) → startYear = thisYear
 */
function getAcademicYear() {
  const now = new Date();
  const year = now.getFullYear();
  const startYear = now.getMonth() < 6 ? year - 1 : year;
  return `${startYear} – ${startYear + 1}`;
}

/**
 * Returns heading string e.g. "Admissions for 2024–25"
 * End year is shown as 2-digit short form.
 */
function getAdmissionHeading() {
  const now = new Date();
  const year = now.getFullYear();
  const startYear = now.getMonth() < 6 ? year - 1 : year;
  const endShort = String(startYear + 1).slice(-2); // "25"
  return `Admissions for ${startYear}–${endShort}`;
}

export { getAcademicYear, getAdmissionHeading };
