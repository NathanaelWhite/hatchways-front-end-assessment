import React from "react";
import styles from "./StudentInfoCard.module.css";

const StudentCard = ({ students, findGradeAverage }) => {
  return (
    <div className={styles.container}>
      {students.map((student, key) => (
        <div key={key} className={styles.studentContainer}>
          <img src={student.pic} className="avatar" alt="student avatar" />
          <div className={styles.infoContainer}>
            <div className={styles.header}>
            <h1 className="studentName">
              {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
            </h1>
            <button className={styles.gradeBtn}>+</button>
            </div>
            <div className="studentStats">
              <ul>
                <li>Email: {student.email}</li>
                <li>Company: {student.company}</li>
                <li>Skill: {student.skill}</li>
                <li>Average: {findGradeAverage(student.grades)}%</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
