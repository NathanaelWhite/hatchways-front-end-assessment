import React, { useState } from "react";
import styles from "./StudentInfoCard.module.css";

const StudentCard = ({ students, student, findGradeAverage, createTag }) => {
  const [showGrades, setShowGrades] = useState(false);
  const [tagName, setTagName] = useState("");
  
  // const addTag = () => {
  //   createTag(student, tagName);
  // };

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
                onClick={() => {setShowGrades(!showGrades)}}
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
              {/* <div className={styles.tagContainer}>
                {student.map((tag, i) => {
                  return (
                    <div className="tag" key={i}>
                      {tag}
                    </div>
                  );
                })}
              </div>
              <input
                onChange={(e) => {
                  setTagName(e.target.value);
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    addTag();
                    e.target.value = "";
                  }
                }}
                className={styles.tagInput}
                placeholder="Add a tag"
              /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
