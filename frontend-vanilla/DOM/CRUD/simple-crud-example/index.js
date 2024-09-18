// model (data)
let gStudents = [
  {
    id: makeId(),
    fullName: "baba netanyahu",
    avgGrade: 77,
  },
  {
    id: makeId(),
    fullName: "mama johnson",
    avgGrade: 93,
  },
  {
    id: makeId(),
    fullName: "dada lulu",
    avgGrade: 44,
  },
];

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

// READ
function renderStudentList() {
  const elStudentList = document.getElementById("studentList");

  for (let i = 0; i < gStudents.length; i++) {
    const student = gStudents[i];
    const elStudent = document.createElement("li");
    elStudent.setAttribute("id", student.id + "-el");

    elStudent.innerHTML = `
      <div>${student.fullName}</div>
      <div>${student.avgGrade}</div>
      <button onclick="deleteStudent('${student.id}')">Delete</button>
      `;

    elStudentList.appendChild(elStudent);
  }
}

// DELETE
function deleteStudent(studentId) {
  const newStudents = [];

  for (let i = 0; i < gStudents.length; i++) {
    const student = gStudents[i];

    if (student.id !== studentId) {
      newStudents.push(student);
    }
  }

  gStudents = newStudents;

  const elStudentList = document.getElementById("studentList");

  const elStudentToDelete = elStudentList.querySelector(`#${studentId}-el`);
  elStudentList.removeChild(elStudentToDelete);
}

renderStudentList();
