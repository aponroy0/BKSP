const { exportPages } = require("next/dist/export/worker");

const events = [
  {
    id: 1,
    month: "Mar",
    day: "22",
    tag: "Academic",
    time: "10:00 AM - 02:00 PM",
    title: "Inter-School Debate Competition",
    desc: "BKSB will host the regional debate semi-finals where students tackle global issues with sharp logic and eloquence.",
  },
  {
    id: 2,
    month: "Apr",
    day: "05",
    tag: "Cultural",
    time: "04:30 PM Onwards",
    title: "Spring Cultural Festival",
    desc: "A celebration of local heritage, music, and dance performances by our students to welcome the new season.",
  },
  {
    id: 3,
    month: "Apr",
    day: "18",
    tag: "Academic",
    time: "All Day",
    title: "Annual Science Fair",
    desc: "Innovative projects and experiments showcasing the scientific curiosity of our young minds from Grade 6 to 10.",
  },
  {
    id: 4,
    month: "May",
    day: "01",
    tag: "Holidays",
    time: "Full Day",
    title: "International Workers' Day",
    desc: "Campus will remain closed in observance of May Day. Regular classes will resume the following day.",
  },
];

export { events };
