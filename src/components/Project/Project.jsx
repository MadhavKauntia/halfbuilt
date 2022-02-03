import React from "react";
import "./Project.css";

const Project = ({ title, description, tags, availableIn }) => {
  const getAvailableTechs = () => {
    let availableTechs = "";
    if (availableIn.length > 0) {
      availableIn.map((tech) => {
        availableTechs = availableTechs.concat(tech).concat(", ");
        return "";
      });
      return availableTechs.substring(0, availableTechs.length - 2);
    }
    return availableTechs;
  };
  return (
    <div className="halfbuilt__project">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="halfbuilt__project-tags">
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
        <div className="halfbuilt__project-tags_available">
          <p>
            <span>available in: {getAvailableTechs()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
