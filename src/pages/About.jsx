import "./About.css";
const About = () => {
  return (
    <div className="About-Main-Container">
      <div className="About-Container">
        <div className="About-Me">About me</div>
        <div className="About-Info">
          <p className="About-Info-Header">
            I am a front-end developer based in Patna, Bihar, looking for
            exciting opportunities. I have an MCA background and enjoy building
            responsive and user-friendly web applications.{" "}
          </p>
          <p className="About-Info-Para">
            I am passionate and curious about solving problems. Currently, I’m
            focusing on React.js, JavaScript, Tailwind CSS, and building
            real-world frontend projects. I’m continuously learning new
            technologies to improve my skills. When I’m not programming, I enjoy
            gaming, creating videos, and learning new things.
          </p>
          <a href="#" className="About-More">
            MORE ABOUT ME
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
