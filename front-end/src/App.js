import { useState, useEffect } from "react";
import StudentCard from "./components/Cards/StudentCard";
import styles from "./App.module.css";

function App() {

  // setting the initial state for students
  const [students, setStudents] = useState([]);

  // fetching student data from the API
  const fetchData = () => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.students));
  };
  
  // algorithm to find the grade average 
  function findGradeAverage(array) {
    let gradeSum = 0;
    for (let i = 0; i < array.length; i++) {
      gradeSum += parseInt(array[i]);
    }
    let average = gradeSum / array.length;
    return average;
  }

  // calling the fetch function when the app initially loads with useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className={styles.App}>
      <div className={styles.main}>
      <StudentCard students={students} findGradeAverage={findGradeAverage} />
      </div>
    </div>
  );
}

export default App;
