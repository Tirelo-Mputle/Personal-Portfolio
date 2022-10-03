import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { Home } from "./pages/index";
//components
import { Navbar } from "./components/index";
//UI
import { GlobalStyle, Theme, CenteredSection } from "./UI/index";
function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
