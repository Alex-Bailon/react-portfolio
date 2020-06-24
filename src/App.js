import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  document.title = "Alex Bailon";
  const [ page, setPage ] = useState("AboutMe")
  const handlePageChange = (newPage) => {
    console.log(newPage)
    setPage(newPage)
    console.log(page)
  }
  return (
    <Router>
        <div>
          <Navbar page = { page } handlePageChange={ handlePageChange }/>
          <Wrapper>
            <Route exact path="/" component={Aboutme} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
