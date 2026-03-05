function getMonth(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "short" }).toUpperCase();
}

function getDay(dateString) {
  const date = new Date(dateString);
  return String(date.getDate()).padStart(2, "0");
}

function getYear(dateString) {
  const date = new Date(dateString);
  return date.getFullYear(); // returns number like 2025
}

export { getDay, getMonth, getYear };
