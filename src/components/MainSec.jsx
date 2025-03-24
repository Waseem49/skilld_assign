import React from "react";
import "./Mainsec.css";
import Card from "./Card";
const MainSec = () => {
  const cardarr = [
    {
      image: "https://skilldzire.com/images/full-stack-java.jpg",
      title: "Full Stack Java Development",
      stu: "12000",
      rating: "4.8",
    },
    {
      image: "https://skilldzire.com/images/artificial-intelligence.jpg",
      title: "Artificial Intelligence",
      stu: "8000",
      rating: "4.8",
    },

    {
      image: "https://skilldzire.com/images/embedded-system.jpg",
      title: "Embedded Systems",
      stu: "10000",
      rating: "4.8",
    },
    {
      image: "https://skilldzire.com/images/full-stack-java.jpg",
      title: "Electric Vehicle",
      stu: "11000",
      rating: "4.1",
    },
    {
      image: "https://skilldzire.com/images/artificial-intelligence.jpg",
      title: "Artificial Intelligence",
      stu: "8000",
      rating: "4.8",
    },
    {
      image: "https://skilldzire.com/images/full-stack-java.jpg",
      title: "Full Stack Java Development",
      stu: "12000",
      rating: "4.8",
    },
    {
      image: "https://skilldzire.com/images/embedded-system.jpg",
      title: "Embedded Systems",
      stu: "10000",
      rating: "4.8",
    },
  ];
  const couresarr = [
    "Popular Courses",
    "Software",
    "Electronics",
    "Electrical",
    "Mechanical",
  ];
  return (
    <>
      <div className="MainSec" id="centerr">
        <div className="main-inner-div">
          <div className="main-left-side">
            <h3>Course Categories</h3>
            <div>
              {couresarr.map((el) => (
                <div className="course-left-side">
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="main-right-side">
            {cardarr.map((el) => (
              <Card key={el.title} data={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSec;
