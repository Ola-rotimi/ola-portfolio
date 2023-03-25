import Footer from "../../component/footer/footer.component";
import NavIcon from "../../component/nav-icon/nav-icon.component";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-description">
        <p>
          Hello! I am a <span>Olarotimi Adamson</span>, a {""}
          <span>Frontend Web Developer</span>. I started my Tech Journey in 2022
          , I have developed a strong passion for Frontend Development. I have a
          unique combination of {""}
          <span>React.js, Vue.js, JavaScript</span>, and I am always
          striving to improve and expand my knowledge in the field.
        </p>

        <p>
          Throughout my career, I have had the opportunity to work on some
          exciting projects and collaborate with some talented individuals.
        </p>

        <p>
          When I'm not working, I enjoy{" "}
          <span>Playing Video Games and Traveling</span>.
        </p>

        <p>
          I am excited to be able to bring my skills and experience to new
          challenges, and I am always open to new opportunities. If you are
          interested in learning more about my background or working together,
          please feel free to contact me.
        </p>
      </div>
      <NavIcon />
      <Footer />
    </div>
  );
};

export default About;
