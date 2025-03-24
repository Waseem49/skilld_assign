import React from "react";
import "./Coursedetails.css";

const Coursedetails = () => {
  const listarr = [
    {
      title: "1. Introduction to Java",
      desclist: [
        "Introduction to Java",
        "Java Features",
        "Java Installation and JVM Architecture",
      ],
    },
    {
      title: "2. Java Basics",
      desclist: ["Java Basics", "Data Types", "Java Operators"],
    },
    {
      title: "3. Object-Oriented Programming (OOP) in Java",
      desclist: [
        "Encapsulation in Java",
        "Inheritance in Java",
        "Polymorphism",
      ],
    },
    {
      title: "4. Advanced Java Concepts",
      desclist: [
        "IString, StringBuffer, StringBuilder",
        "Exception Handling in Java",
        "Multi-Threading in Java",
      ],
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <div className="course-main">
        <div className="header">
          <div
            style={{
              backgroundColor: "white",
              padding: ".6rem",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            <img src="https://skilldzire.com/images/Logo.svg" alt="kvkv" />
          </div>
          <h1
            style={{
              color: "#f02d00",
              fontSize: "40px",
              lineHeight: "1px",
              padding: "1rem",
            }}
          >
            Full Stack Java
          </h1>
          <p style={{ fontSize: "20px" }}>
            Master Full Stack Development with Java
          </p>
        </div>
        <div className="bottam-div">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Course Curriculum</h2>
          </div>
          {listarr.map((el) => (
            <div className="ollist">
              <h3>{el.title}</h3>
              <ul>
                <li>{el.desclist[0]}</li>
                <li>{el.desclist[1]}</li>
                <li>{el.desclist[2]}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
