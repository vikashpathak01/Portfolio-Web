import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import resume from "../assets/vikashcv.pdf";

const Contact = () => {
  return (
    <div className="Contact-Main-Container">
      <div className="Contact-Container">
        <div className="Contact-Container-Info">
          <h1>Let’s connect</h1>
          <div>
            <span className="Contact-Mail">Say hello at</span>{" "}
            <a href="#" className="Mail">
              vikashpathak100v@gmail.com
            </a>
          </div>
          <div>
            <span className="Contact-Resume"> For more info, here’s my </span>
            <a href={resume} download className="resume">
              resume
            </a>
          </div>
          <div className="Contact-Social-Links">
            <a href="">
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/vikashpathak01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="Form-Main-Container">
          <form action="" className="Form-Container">
            <div className="Form-Input">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="Input-Container "
              />
            </div>
            <div className="Form-Input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="Input-Container "
              />
            </div>
            <div className="Form-Input">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="name"
                className="Input-Container "
              />
            </div>
            <div className="Form-Input">
              <label htmlFor="message" className="">
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="name"
                rows={6}
                className="Text-Area-Container "
              />
            </div>
            <div className="Form-Submit">
              <button className="Form-Button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
