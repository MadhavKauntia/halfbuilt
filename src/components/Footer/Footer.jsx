import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="halfbuilt__footer">
      <div className="halfbuilt__footer-links">
        <p>terms of use</p>
        <p>privacy</p>
      </div>
      <div className="halfbuilt__footer-discord">
        <a
          href="https://discord.gg/Fk5xG248xU"
          target="_blank"
          rel="noreferrer"
        >
          join the discord
        </a>
      </div>
    </div>
  );
};

export default Footer;
