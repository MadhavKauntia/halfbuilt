import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import "./projects.css";
import { projects } from "../../data/projects";
import Footer from "../../components/Footer/Footer";

const Projects = (props) => {
  const [difficultySelect, setDifficultySelect] = useState("");
  const [techSelect, setTechSelect] = useState("");

  const difficultyHandler = (event) => {
    setDifficultySelect(event.target.value);
  };

  const techHandler = (event) => {
    setTechSelect(event.target.value);
  };

  const filterProjects = (project) => {
    if (difficultySelect !== "" && !project.tags.includes(difficultySelect)) {
      return false;
    }
    if (techSelect !== "" && !project.availableIn.includes(techSelect)) {
      return false;
    }
    return true;
  };

  return (
    <div className="halfbuilt__projects">
      <Navbar />
      <div className="halfbuilt__projects-filters section__margin">
        <div className="halfbuilt__projects-filters_search">
          <i className="material-icons">search</i>
          <input type="text" placeholder="search half built projects..." />
        </div>
        <div className="halfbuilt__projects-select">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="Difficulty"
            id="difficulty"
            onChange={difficultyHandler}
          >
            <option value=""></option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="halfbuilt__projects-select">
          <label htmlFor="tech">Tech</label>
          <select name="Tech" id="tech" onChange={techHandler}>
            <option value=""></option>
            <option value="java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="go">Golang</option>
          </select>
        </div>
      </div>
      <div className="halfbuilt__projects-grid section__margin">
        {projects.filter(filterProjects).map((project) => (
          <Project
            title={project.title}
            description={project.description}
            tags={project.tags}
            availableIn={project.availableIn}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
