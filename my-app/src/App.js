import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Contact" element={<ContactPage/>}/>
          <Route exact path="/Services" element={<ServicesPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
