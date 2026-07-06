const elements = {
    cgpa: document.getElementById("cgpa"),
    semester: document.getElementById("semester"),
    subjectName: document.getElementById("subjectName"),
    credits: document.getElementById("credits"),
    grade: document.getElementById("grade"),
    addBtn: document.getElementById("addBtn"),
    tableBody: document.getElementById("tableBody"),
    gpa: document.getElementById("gpa"),
    futureGpa: document.getElementById("futureGpa"),
    simulateBtn: document.getElementById("simulateBtn"),
    projectedCgpa: document.getElementById("projectedCgpa")
};

const gradePoints = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0
};

let semesters = JSON.parse(localStorage.getItem("semesters")) || {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
};

function saveData() {
    localStorage.setItem(
        "semesters",
        JSON.stringify(semesters)
    );
}

function clearForm() {

    elements.subjectName.value = "";
    elements.credits.value = "";
    elements.grade.value = "";

}

function addSubject() {

    const semester = elements.semester.value;

    const subjectName =
        elements.subjectName.value.trim();

    const credits =
        Number(elements.credits.value);

    const grade =
        elements.grade.value;

    if (
        subjectName === "" ||
        credits <= 0 ||
        grade === ""
    ) {
        alert("Fill all fields.");
        return;
    }

    const duplicate =
        semesters[semester].some(subject =>
            subject.name.toLowerCase() ===
            subjectName.toLowerCase()
        );

    if (duplicate) {
        alert("Subject already exists.");
        return;
    }

    const subject = {
        id: Date.now(),
        name: subjectName,
        credits,
        grade,
        gradePoint: gradePoints[grade]
    };

    semesters[semester].push(subject);

    saveData();

    renderTable();
    calculateGPA();
    calculateCGPA();

    clearForm();

}

function deleteSubject(id) {

    const semester =
        elements.semester.value;

    semesters[semester] =
        semesters[semester].filter(
            subject => subject.id !== id
        );

    saveData();

    renderTable();
    calculateGPA();
    calculateCGPA();

}

function renderTable() {

    const semester = elements.semester.value;
    const subjects = semesters[semester];

    let rows = "";

    subjects.forEach((subject, index) => {

        rows += `
            <tr>
                <td>${index + 1}</td>
                <td>${subject.name}</td>
                <td>${subject.credits}</td>
                <td>${subject.grade}</td>
                <td>${subject.gradePoint}</td>
                <td>
                    <button onclick="deleteSubject(${subject.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });

    elements.tableBody.innerHTML = rows;

}

function calculateGPA() {

    const semester = elements.semester.value;
    const subjects = semesters[semester];

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {

        totalCredits += subject.credits;
        totalPoints += subject.credits * subject.gradePoint;

    });

    const sgpa =
        totalCredits === 0
            ? 0
            : totalPoints / totalCredits;

    elements.gpa.textContent = sgpa.toFixed(2);

}

function calculateCGPA() {

    let totalCredits = 0;
    let weightedSGPA = 0;

    for (let sem = 1; sem <= 8; sem++) {

        const subjects = semesters[sem];

        if (subjects.length === 0) continue;

        let semCredits = 0;
        let semPoints = 0;

        subjects.forEach(subject => {

            semCredits += subject.credits;
            semPoints += subject.credits * subject.gradePoint;

        });

        const sgpa = semPoints / semCredits;

        weightedSGPA += sgpa * semCredits;
        totalCredits += semCredits;

    }

    const cgpa =
        totalCredits === 0
            ? 0
            : weightedSGPA / totalCredits;

    elements.cgpa.textContent = cgpa.toFixed(2);

}

function simulateCGPA() {

    const expectedGPA =
        Number(elements.futureGpa.value);

    if (
        isNaN(expectedGPA) ||
        expectedGPA < 0 ||
        expectedGPA > 10
    ) {
        alert("Enter a GPA between 0 and 10.");
        return;
    }

    let totalCredits = 0;
    let weightedSGPA = 0;
    let completedSemesters = 0;

    for (let sem = 1; sem <= 8; sem++) {

        const subjects = semesters[sem];

        if (subjects.length === 0) continue;

        let semCredits = 0;
        let semPoints = 0;

        subjects.forEach(subject => {

            semCredits += subject.credits;
            semPoints += subject.credits * subject.gradePoint;

        });

        const sgpa = semPoints / semCredits;

        weightedSGPA += sgpa * semCredits;
        totalCredits += semCredits;

        completedSemesters++;

    }

    const averageCredits =
        completedSemesters === 0
            ? 20
            : totalCredits / completedSemesters;

    const currentSemester =
        Number(elements.semester.value);

    const remainingSemesters =
        8 - currentSemester;

    weightedSGPA +=
        expectedGPA *
        averageCredits *
        remainingSemesters;

    totalCredits +=
        averageCredits *
        remainingSemesters;

    const projectedCGPA =
        totalCredits === 0
            ? 0
            : weightedSGPA / totalCredits;

    elements.projectedCgpa.textContent =
        projectedCGPA.toFixed(2);

}

elements.addBtn.addEventListener(
    "click",
    addSubject
);

elements.semester.addEventListener(
    "change",
    () => {

        renderTable();
        calculateGPA();

    }
);

elements.simulateBtn.addEventListener(
    "click",
    simulateCGPA
);

renderTable();
calculateGPA();
calculateCGPA();