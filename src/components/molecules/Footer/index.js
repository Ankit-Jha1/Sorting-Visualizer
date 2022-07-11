import React from "react";
import "./style.css";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with <span className="Footer__Heart">&hearts;</span>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/ankit-jha-9a89b01ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Ankit Jha
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://youtu.be/JFjvVmvC3pQ"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a>
        <a
          href="https://github.com/ramiz-rahman/sort-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
