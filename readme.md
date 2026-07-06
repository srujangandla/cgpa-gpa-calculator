# 🎓 GPA & CGPA Calculator

A responsive GPA & CGPA Calculator built using **HTML, CSS, and JavaScript**. The application allows students to manage semester-wise subjects, calculate Semester GPA (SGPA), track their cumulative CGPA, and predict their graduation CGPA using a What-if analysis.

---

## 🚀 Features

* Add subjects semester-wise
* Enter subject credits and grades
* Automatic grade-to-grade-point conversion
* Semester GPA (SGPA) calculation
* Running CGPA calculation across multiple semesters
* What-if CGPA prediction for graduation
* Delete subjects
* Duplicate subject validation
* Automatic data saving using Local Storage
* Responsive design for desktop and mobile devices

---

## 📐 Formulas Used

### Semester GPA (SGPA)

[
SGPA = \frac{\sum (Credits \times Grade\ Points)}{\sum Credits}
]

### Cumulative GPA (CGPA)

[
CGPA = \frac{\sum (Semester\ Credits \times Semester\ GPA)}{\sum Semester\ Credits}
]

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📂 Project Structure

```text
GPA-CGPA-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📱 How to Use

1. Select a semester.
2. Enter the subject name.
3. Enter the subject credits.
4. Select the obtained grade.
5. Click **Add Subject**.
6. View the calculated Semester GPA.
7. Switch between semesters to manage different semester records.
8. Observe the automatically updated CGPA.
9. Enter an expected GPA in the What-if section to estimate your graduation CGPA.

---

## 🎯 Grade Mapping

| Grade | Grade Point |
| ----- | ----------: |
| S     |          10 |
| A     |           9 |
| B     |           8 |
| C     |           7 |
| D     |           6 |
| E     |           5 |
| F     |           0 |

---

## 💾 Local Storage

The application stores semester data in the browser using **Local Storage**, allowing data to persist after refreshing or reopening the page.

---

## 📸 Screenshots

### Home Page

![Home Page](screenshots/home.png)

---

### Add Subject

![Add Subject](cgpa-calculator\screenshots\01.png)

---

### SGPA & CGPA Calculation

![SGPA and CGPA](cgpa-calculator\screenshots\02.png)

---

### Graduation CGPA Prediction

![Prediction](screenshots/prediction.png)
---

## 🔮 Future Improvements

* Edit subject details
* Export GPA report as PDF
* Export semester data to Excel/CSV
* GPA trend visualization using charts
* Dark mode
* Multiple grading system support
* Cloud synchronization and user authentication

---

## 👨‍💻 Author

**Srujan**

---

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it for educational and personal purposes.
