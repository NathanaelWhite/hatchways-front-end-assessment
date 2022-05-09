import React from "react";
import StudentCard from "./StudentCard";

// -------- Destructuring student props so to make student cards easier and so I can access a 'single' student

const Students = ({ students, findGradeAverage, createTag }) => {
  return (
    <div>
      {students.map((student) => {
        return (
          <StudentCard
            company={student.company}
            email={student.company}
            firstName={student.firstName}
            lastName={student.lastName}
            student={student}
            skill={student.skill}
            image={student.pic}
            grades={student.grades}
            average={findGradeAverage(student.grades)}
            createTag={createTag}
            key={student.id.toString()}
          />
        );
      })}
    </div>
  );
};

export default Students;
