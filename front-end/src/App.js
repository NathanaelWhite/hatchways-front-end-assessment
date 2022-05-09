import { useState, useEffect } from "react";
import Students from "./components/StudentCards/Students";
import styles from "./App.module.css";
import NameSearchBar from "./components/NameSearchBar/NameSearchBar.js";
import TagSearchBar from "./components/TagSearchBar/TagSearchBar.js";

function App() {
  // setting the initial state for students and search bars
  const [students, setStudents] = useState([]);
  const [nameInput, setNameInput] = useState("");

  // fetching student data from the API
  async function fetchData() {
    const res = await fetch("https://api.hatchways.io/assessment/students")
    const data = await res.json();
    const students = data.students;
    // adding a tags array to each student that gets returned
      students.forEach((student) => {
        student.tags = [];
      })
      setStudents(students);
  };

  // calling the fetch function when the app initially loads with useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  // algorithm to find the grade average
  const findGradeAverage = (array) => {
    let gradeSum = 0;
    for (let i = 0; i < array.length; i++) {
      gradeSum += parseInt(array[i]);
    }
    let average = gradeSum / array.length;
    return average;
  };

  // function to search for a student by name
  const searchByName = (input) => {
    let filteredName = [];
    if (input && input.toUpperCase) {
      input = input.toUpperCase();
    }
    students.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toUpperCase();

      if (fullName.includes(input)) {
        filteredName.push(student);
      }
    });
    return filteredName;
  };
  const studentNameFilter = searchByName(nameInput);

  // function to create a tag and update the student data
  // ------------- EXPLAIN LATER
  const createTag = (student, newTag) => {
    student.tags.push(newTag);

    const indexOfStudent = students.findIndex((s) => s.id === student.id);
    let studentDataWithChanges = [
      ...students.slice(0, indexOfStudent),
      student,
      ...students.slice(indexOfStudent + 1),
    ];
    setStudents(studentDataWithChanges);
  };
  //---------------- EXPLAIN LATER


  // ----- return statement
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <NameSearchBar handleSearch={setNameInput} />
        <TagSearchBar />
        <Students
          students={studentNameFilter}
          findGradeAverage={findGradeAverage}
          createTag={createTag}
        />
      </div>
    </div>
  );
}

export default App;
