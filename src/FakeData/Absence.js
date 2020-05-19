const Absent = [
  { id: 1, childID: 1, date: "1/1" },
  { id: 2, childID: 5, date: "1/1" },
  { id: 3, childID: 10, date: "1/1" },
];

// select absent students in clas
export function getAbsenceToday() {
  return Absent.filter((a) => a.date === "1/1");
}
