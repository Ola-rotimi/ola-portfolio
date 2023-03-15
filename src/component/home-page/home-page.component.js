import { ImTwitter, ImLinkedin2, ImGithub } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

import "./home-page.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="profile-info">
        <section className="intro">
          <h1>
            Hi, I'm <span className="name">Olarotimi</span>
          </h1>
          <h2>
            I'm a <span className="job">Software Engineer</span>
          </h2>
        </section>
        <section className="profile-image">
          <img
            src="https://pbs.twimg.com/profile_images/1549344051048206338/X9PaUsQa_200x200.jpg"
            alt="ola-avatar"
          />
        </section>
      </section>
      <section className="social-links">
        <button>
          <a
            href="
            https://www.linkedin.com/in/olarotimi-adamson-988b7187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin2 />
          </a>
        </button>
        <button>
          <a
            href="
                https://www.twitter.com/LazyDevOla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImTwitter />
          </a>
        </button>
        <button>
          <a
            href="
                https://www.github.com/Ola-rotimi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub />
          </a>
        </button>
        <button>
          <a
            href="
                https://www.instagram.com/olarotimi_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
