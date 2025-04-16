// GPA grade scale
const gradePoints = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    F: 0,
  };
  
  // Add event listener to GPA form
  document.getElementById("gpa-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    const rows = document.querySelectorAll(".course-row");
    let totalPoints = 0;
    let validGrades = 0;
  
    rows.forEach((row) => {
      const grade = row.querySelector("select").value;
  
      if (grade in gradePoints) {
        totalPoints += gradePoints[grade];
        validGrades++;
      }
    });
  
    const resultContainer = document.getElementById("result");
  
    if (validGrades === 0) {
      resultContainer.textContent = "Please select at least one grade to calculate GPA.";
      return;
    }
  
    const gpa = (totalPoints / validGrades).toFixed(2);
    resultContainer.textContent = `Your estimated GPA is: ${gpa}`;
  });
  
  // Add dynamic course row
  document.getElementById("add-course").addEventListener("click", function () {
    const container = document.getElementById("courses-container");
  
    const newRow = document.createElement("div");
    newRow.classList.add("course-row");
  
    newRow.innerHTML = `
      <input type="text" placeholder="Course Name" required />
      <select required>
        <option value="">Select Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
    `;
  
    container.appendChild(newRow);
  });
  