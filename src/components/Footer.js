import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mb-0 mt-4 position-relative" >
      <p className="mb-1">&copy; {new Date().getFullYear()} iNotebook. All rights reserved.</p>
      <p className="mb-0">
        Made by{" "}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warning text-decoration-none"
        >
          Abhinav Jain
        </a>
      </p>
    </footer>
  );
};

export default Footer;
