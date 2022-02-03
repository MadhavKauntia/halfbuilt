import React from "react";
import "./login.css";
import github from "../../assets/github.png";

const Login = () => {
  return (
    <div className="halfbuilt__login section__padding">
      <div className="halfbuilt__login-container">
        <div className="halfbuilt__login-container__content">
          <h1>
            <span className="purple">half</span>
            <span>built.dev</span>
          </h1>
          <p>
            leetcode alternative to dev projects; saepe odio voluptas<br></br>
            voluptatum quia qui adipisci repellat repellendus natus.
          </p>
          <img src={github} alt="github" />
        </div>
      </div>
      <div className="halfbuilt__login-footer">
        <p>terms of use</p>
        <p>privacy</p>
      </div>
    </div>
  );
};

export default Login;
