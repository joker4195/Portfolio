import "./workCardStyles.css";
import React from "react";
import pro1 from "../assets/project 5.jpeg";
const workCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image"></img>
          <h2 className="project-title">Project Title</h2>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default workCard;
