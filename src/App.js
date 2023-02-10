import { NavBar } from "./routes/nav-bar/nav-bar.component";
import { Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Projects from "./routes/project/project.component";
import Contact from "./routes/contact/contact.component";

export const App = () => {
    return (
        <div className="App-container">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        
        </div>
    )
}