import React from "react";

export default function Footer() {
  return (
    <footer className="flex">
      <nav className="flex">
        <ul className="flex icons">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/choir241"
              className="fa-brands fa-twitter"
            >
              <p className="hidden">Twitter</p>
            </a>
          </li>

          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/richard-choir/"
              className="fa-brands fa-linkedin"
            >
              <p className="hidden">LinkedIn</p>
            </a>
          </li>

          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/225kh_drw/?hl=en"
              className="fa-brands fa-instagram"
            >
              <p className="hidden">Instagram</p>
            </a>
          </li>

          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/choir27"
              className="fa-brands fa-github"
            >
              <p className="hidden">Github</p>
            </a>
          </li>
        </ul>

        <small>EchoVerse &copy; 2023. All rights are reserved</small>
      </nav>
    </footer>
  );
}
