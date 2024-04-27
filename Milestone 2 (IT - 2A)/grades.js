// Student data
const students = [
  { code: "121212", name: "FAVIS, MARVIN", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2022, entryYearLevel: 1 },
  { code: "131313", name: "TRADES, TORI", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2022, entryYearLevel: 1 },
  { code: "131313", name: "BERDIN, JVON", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2021, entryYearLevel: 2 },
  { code: "131313", name: "VILLARBA, JAN MARIE", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2021, entryYearLevel: 2 },
  { code: "131313", name: "KAIZEN, ZI", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2023, entryYearLevel: 3 },
  { code: "131313", name: "KAIZEN, AB", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2021, entryYearLevel: 1 },
  { code: "131313", name: "TRADER, AMBITIOUS", final: "", gradeType: "NEW", yearLevel: 2, academicStatus: "Regular", yearOfEntry: 2023, entryYearLevel: 2 }
];

// Populate student data
const studentTableBody = document.getElementById("student-table").getElementsByTagName('tbody')[0];
students.forEach(student => {
  const row = document.createElement("tr");
  row.classList.add("bg-gray-300", "hover:bg-gray-400");

  const codeCell = document.createElement("td");
  codeCell.textContent = student.code;
  codeCell.classList.add("px-4", "py-2");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.name;
  nameCell.classList.add("px-4", "py-2", "hover-float");

  const finalCell = document.createElement("td");
  const finalSelect = document.createElement("select");
  finalSelect.classList.add("w-full", "border", "py-1", "px-2", "rounded");
  finalSelect.innerHTML = `<option></option><option>A</option><option>B+</option><option>C</option><option>C+</option><option>D</option><option>F</option>`;
  finalCell.appendChild(finalSelect);
  finalCell.classList.add("px-4", "py-2");

  const gradeTypeCell = document.createElement("td");
  gradeTypeCell.textContent = student.gradeType;
  gradeTypeCell.classList.add("px-4", "py-2", "text-center");

  const yearLevelCell = document.createElement("td");
  yearLevelCell.textContent = student.yearLevel;
  yearLevelCell.classList.add("px-4", "py-2", "text-center");

  const academicStatusCell = document.createElement("td");
  academicStatusCell.textContent = student.academicStatus;
  academicStatusCell.classList.add("px-4", "py-2", "text-center");

  const yearOfEntryCell = document.createElement("td");
  yearOfEntryCell.textContent = student.yearOfEntry;
  yearOfEntryCell.classList.add("px-4", "py-2", "text-center");

  const entryYearLevelCell = document.createElement("td");
  entryYearLevelCell.textContent = student.entryYearLevel;
  entryYearLevelCell.classList.add("px-4", "py-2", "text-center");

  row.appendChild(codeCell);
  row.appendChild(nameCell);
  row.appendChild(finalCell);
  row.appendChild(gradeTypeCell);
  row.appendChild(yearLevelCell);
  row.appendChild(academicStatusCell);
  row.appendChild(yearOfEntryCell);
  row.appendChild(entryYearLevelCell);
  
  studentTableBody.appendChild(row);
});
