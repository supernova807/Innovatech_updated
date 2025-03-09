import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import MainSection from "./Components/MainSection";
import Features from "./Components/Features";
import Workflow from "./Components/Workflow";
import Footer from "./Components/Footer.jsx";
import Contact from './Contact.jsx';
import Projects from "./Components/Projects.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          {/* Home Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <Features />
                <Workflow />
                <Projects/>
                <Footer />
                
              </>
            }
          />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
