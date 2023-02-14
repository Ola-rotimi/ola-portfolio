import HomePage from "../../component/home-page/home-page.component";
import Footer from "../../component/footer/footer.component";
import NavIcon from "../../component/nav-icon/nav-icon.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <HomePage />
      <NavIcon />
      <Footer />
    </div>
  );
};

export default Home;
