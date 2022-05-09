import React, { useState } from "react";
import styles from "./StudentInfoCard.module.css";


// destructuring props for easy use
const StudentCard = ({
  company,
  email,
  firstName,
  lastName,
  student,
  skill,
  image,
  grades,
  average,
  createTag,
}) => {

  // setting state for grades and tags
  const [showGrades, setShowGrades] = useState(false);
  const [tagName, setTagName] = useState("");

  // function to add a tag to a user
  const addTag = () => {
    createTag(student, tagName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.studentContainer}>
        <img src={image} className="avatar" alt="student avatar" />
        <div className={styles.infoContainer}>
          <div className={styles.header}>
            <h1 className="studentName">
              {firstName.toUpperCase()} {lastName.toUpperCase()}
            </h1>
            <button
              onClick={() => {
                setShowGrades(!showGrades);
              }}
              className={styles.gradeBtn}
            >
              {showGrades ? "-" : "+"}
            </button>
          </div>
          <div className="studentStats">
            <ul>
              <li>Email: {email}</li>
              <li>Company: {company}</li>
              <li>Skill: {skill}</li>
              <li>Average: {average}%</li>
            </ul>

            <ul>
              {showGrades &&
                grades.map((grade, index) => {
                  return (
                    <div key={grade + " " + index}>
                      <div>
                        Test {index + 1} : {grade}%
                      </div>
                    </div>
                  );
                })}
            </ul>

            <div className={styles.tagContainer}>
              {student.tags.map((tag, index) => {
                return (
                  <div className={styles.tag} key={student + index}>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
