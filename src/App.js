import React from "react";
import Navbar from "./Components/NavbarOne/Navbar";
import Links from "./Components/Links/Links";
import Grid from "./Components/Grid/Grid";
import BottomLinks from "./Components/BottomLinks/BottomLinks";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="sticky top-0 bg-white">
        <Navbar />
        <Links />
      </div>
      <Grid />
      <BottomLinks />
      <Footer />
    </div>
  );
}

export default App;
