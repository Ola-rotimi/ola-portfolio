import NavIcon from "../../component/nav-icon/nav-icon.component";
import Projects from "../../component/project/project.component";
import Footer from "../../component/footer/footer.component";
import "./project.route.style.scss";

const Project = () => {
  return (
    <div className="project-container">
      <Projects />
      <NavIcon />
      <Footer />
    </div>
  );
};

export default Project;
