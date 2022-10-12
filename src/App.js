import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { Home, About, Projects, Resume, Contact } from "./pages/index";
//components
import { Navbar } from "./components/index";
//UI
import { GlobalStyle, Theme, BackOverlay, WhiteOverlay } from "./UI/index";
function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const [isBackOverlay, setIsBackOverlay] = useState(true);
  const openSideNav = () => {
    setIsSideNavOpen(true);
    setIsBackOverlay(true);
  };
  const closeSideNav = () => {
    setIsSideNavOpen(false);
    setIsBackOverlay(false);
  };

  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />

        {isSideNavOpen && (
          <WhiteOverlay
            closeSideNav={closeSideNav}
            isBackOverlay={isBackOverlay}
            isSideNavOpen={isSideNavOpen}
          />
        )}
        <Navbar openSideNav={openSideNav} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
