import StudentCard from "./components/Cards/StudentCard";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.students));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <StudentCard students={students} />
    </div>
  );
}

export default App;
