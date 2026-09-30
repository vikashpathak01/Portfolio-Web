import "./Home.css";
import Vector from "../assets/Vector.png";
import github from "../assets/github.png";
import v from "../assets/v.png";
import { ArrowDownToLine, Link, MoveUpRight } from "lucide-react";
import cv from "../assets/vikashcv.pdf";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-Main-Container">
      <div className="Home-Container">
        <div className="Home-Text-Container">
          <div className="Home-Heading">
            <h1>HI,I AM</h1> <h1>VIKASH PATHAK</h1>
          </div>
          <p className="Home-Para">
            A front-end developer passionate about building accesible and user
            friendly websites.
          </p>
          <div className="Home-Contact-Me">
            <div>
              <NavLink to="/contact" className="contact-me">
                <div>CONTACT ME</div>{" "}
                <span className="Move-Up">
                  <MoveUpRight className="Move-Up-Right" />
                </span>
              </NavLink>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/vikashkumarpathak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img src={Vector} alt="" className="Home-image" />
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/vikashpathak01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img src={github} alt="" className="github-imgage" />
                </div>
              </a>
            </div>
          </div>
          <div className="Download-Container">
            <a href={cv} download className="Download-Cv">
              <div className="Download-Button-Container">
                <div> Download CV</div>
                <span className="Down-Arrow-container">
                  <ArrowDownToLine className="Arrow-Down" />
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="Picture-container">
          <img src={v} alt="" className="Picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
