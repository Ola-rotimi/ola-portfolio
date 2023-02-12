import { Routes, Route } from "react-router-dom";

import "./app.styles.scss";

import NavBar from "./routes/nav-bar/nav-bar.component";
import Home from "./routes/home/home.route";
import About from "./routes/about/about.route";
import Projects from "./routes/project/project.route";
import Contact from "./routes/contact/contact.route";

const App = () => {
  return (
    <div className="App-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
