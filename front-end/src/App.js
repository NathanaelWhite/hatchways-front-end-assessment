import { useState, useEffect } from "react";
import StudentCard from "./components/Cards/StudentCard";
import styles from "./App.module.css";
import NameSearchBar from "./components/SearchBar/SearchBar";

function App() {
  // setting the initial state for students and search bars
  const [students, setStudents] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  // fetching student data from the API
  const fetchData = () => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.students));
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
      setNameFilter(filteredName);
    });
  };

  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <NameSearchBar searchByName={searchByName} handleSearch={setNameFilter} />
        <StudentCard students={nameFilter} findGradeAverage={findGradeAverage} />
      </div>
    </div>
  );
}

export default App;
