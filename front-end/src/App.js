import { useState, useEffect } from "react";
import Students from "./components/StudentCards/Students";
import styles from "./App.module.css";
import NameSearchBar from "./components/NameSearchBar/NameSearchBar.js";
import TagSearchBar from "./components/TagSearchBar/TagSearchBar.js";

function App() {
  // setting the initial state for students and search bars
  const [students, setStudents] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // fetching student data from the API
  async function fetchData() {
    const res = await fetch("https://api.hatchways.io/assessment/students");
    const data = await res.json();
    const students = data.students;
    // adding a tags array to each student that gets returned
    students.forEach((student) => {
      student.tags = [];
    });
    setStudents(students);
  }

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
  const searchByName = (nameInput) => {
    let filteredNames = [];
    if (nameInput && nameInput.toUpperCase) {
      nameInput = nameInput.toUpperCase();
    }
    students.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toUpperCase();

      if (fullName.includes(nameInput)) {
        filteredNames.push(student);
      }
    });
    return filteredNames;
  };

  // function to search for a student by tags
  const searchByTag = (tagInput) => {
    let filteredTags = [];
    if (tagInput && tagInput.toUpperCase) {
      tagInput = tagInput.toUpperCase();
    }

    students.forEach((student) => {
      let tagExists = false;
      student.tags.forEach((tag) => {
        if (tag.toUpperCase().includes(tagInput)) {
          tagExists = true;
        }
      });

      if (!tagInput || tagExists) {
        filteredTags.push(student);
      }
    });
    console.log(filteredTags);
    return filteredTags;
  };

  // function to create a tag and update the student data
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

  // combining search arrays 
  const nameSearchResults = searchByName(nameFilter);
  const tagSearchResults = searchByTag(tagFilter);
  const fullSearchResults = [];

  nameSearchResults.forEach((student) => {
    if (tagSearchResults.includes(student)) {
      fullSearchResults.push(student);
    }
  });

  // ----- return statement
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <NameSearchBar handleNameSearch={setNameFilter} />
        <TagSearchBar handleTagSearch={setTagFilter} />
        <Students
          students={fullSearchResults}
          findGradeAverage={findGradeAverage}
          createTag={createTag}
        />
      </div>
    </div>
  );
}

export default App;
