import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { Home, About, Projects, Resume, Contact } from "./pages/index";
//components
import { Navbar, Footer } from "./components/index";
//UI
import { GlobalStyle, Theme, WhiteOverlay } from "./UI/index";
function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isBackOverlay, setIsBackOverlay] = useState(false);
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
          <Route path="contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
