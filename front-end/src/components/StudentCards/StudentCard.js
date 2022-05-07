import React, { useState } from "react";
import styles from "./StudentInfoCard.module.css";

const StudentCard = ({ students, findGradeAverage }) => {
  const [showGrades, setShowGrades] = useState(false);

  return (
    <div className={styles.container}>
      {students.map((student, key) => (
        <div key={key} className={styles.studentContainer}>
          <img src={student.pic} className="avatar" alt="student avatar" />
          <div className={styles.infoContainer}>
            <div className={styles.header}>
              <h1 className="studentName">
                {student.firstName.toUpperCase()}{" "}
                {student.lastName.toUpperCase()}
              </h1>
              <button
                onClick={() => setShowGrades(!showGrades)}
                className={styles.gradeBtn}
              >
                {showGrades ? "-" : "+"}
              </button>
            </div>
            <div className="studentStats">
              <ul>
                <li>Email: {student.email}</li>
                <li>Company: {student.company}</li>
                <li>Skill: {student.skill}</li>
                <li>Average: {findGradeAverage(student.grades)}%</li>
              </ul>
              <ul>
                {showGrades &&
                  student.grades.map((grade, index) => {
                    return (
                      <div key={index}>
                        <div>
                          Test {index + 1} : {grade}%
                        </div>
                      </div>
                    );
                  })}
              </ul>
              <div className={styles.tagContainer}>
                <div className={styles.tag}>hello</div>
                <div className={styles.tag}>goodbye</div>
              </div>
              <input className={styles.tagInput} placeholder="Add a tag" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
