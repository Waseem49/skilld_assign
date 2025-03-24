import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const nevigate = useNavigate();
  const { image, title, rating, stu } = data;
  const handleclick = () => {
    nevigate("/course");
  };
  return (
    <div onClick={() => handleclick()} className="card-div">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div className="course-info">
        <span>{stu} learners</span>
        <span className="rating">★ {rating}</span>
      </div>
    </div>
  );
};

export default Card;
