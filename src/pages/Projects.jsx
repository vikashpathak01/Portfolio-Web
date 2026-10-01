import "./Projects.css";
import project1 from "../assets/image 10.png";
import port from "../assets/portfolio.png";
import ecom from "../assets/ecom.png";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="Project-Main-Container">
      <div className="Project-Container">
        <div className="Project-Heading">
          <h1 className="Project-Heading-h1">Featured Projects</h1>
          <p className="Project-Heading-p">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        {/* project1 */}
        <div className="Project-Card">
          <div className="Project-Information-Img">
            <img src={ecom} alt="" />
          </div>
          <div className="Project-Details ">
            <p className="Project-Title">OrderCart — E-commerce Frontend</p>
            <p className="Project-Description">
              A responsive e-commerce frontend built with React.js and Vite. The
              project allows users to browse products, view product details, add
              or remove products from the cart, and manage cart items through a
              clean and responsive interface. It uses React Router for
              navigation, reusable React components for the UI, and React state
              management for handling cart functionality.
            </p>
            <div className="Project-Info-Container">
              <p className="Project-Info">Project Info</p>
              <div className="Project-Info-Details">
                <div className="space-between">
                  <span>Year</span>
                  <span>2026</span>
                </div>
                <div className="space-between">
                  <span>Role</span>
                  <span>Front-end Developer</span>
                </div>
              </div>
            </div>
            <div className="Project-link">
              <a href="https://order-cart-inky.vercel.app" target="_blank">
                <span>LIVE DEMO</span>
                <span>
                  <ArrowUpRight />
                </span>
              </a>
              <a
                href="https://github.com/vikashpathak01/Order-Cart"
                target="_blank"
              >
                <span>SEE ON GITHUB</span>
                <span>
                  <FaGithub />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* project2 */}
        <div className="Project-Card">
          <div className="Project-Information-Img">
            <img src={port} alt="" />
          </div>
          <div className="Project-Details ">
            <p className="Project-Title">
              Promotional landing page for our favorite show
            </p>
            <p className="Project-Description">
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>
            <div className="Project-Info-Container">
              <p className="Project-Info">Project Info</p>
              <div className="Project-Info-Details">
                <div className="space-between">
                  <span>Year</span>
                  <span>2026</span>
                </div>
                <div className="space-between">
                  <span>Role</span>
                  <span>Front-end Developer</span>
                </div>
              </div>
            </div>
            <div className="Project-link">
              <a href="">
                <span>LIVE DEMO</span>
                <span>
                  <ArrowUpRight />
                </span>
              </a>
              <a href="">
                <span>SEE ON GITHUB</span>
                <span>
                  <FaGithub />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* project3 */}
        <div className="Project-Card">
          <div className="Project-Information-Img">
            <img src={project1} alt="" />
          </div>
          <div className="Project-Details ">
            <p className="Project-Title">
              Promotional landing page for our favorite show
            </p>
            <p className="Project-Description">
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>
            <div className="Project-Info-Container">
              <p className="Project-Info">Project Info</p>
              <div className="Project-Info-Details">
                <div className="space-between">
                  <span>Year</span>
                  <span>2026</span>
                </div>
                <div className="space-between">
                  <span>Role</span>
                  <span>Front-end Developer</span>
                </div>
              </div>
            </div>
            <div className="Project-link">
              <a href="">
                <span>LIVE DEMO</span>
                <span>
                  <ArrowUpRight />
                </span>
              </a>
              <a href="">
                <span>SEE ON GITHUB</span>
                <span>
                  <FaGithub />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
