import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OneCard from "./OneCard";
import ThreeCard from "./ThreeCard";
import CelticCross from "./CelticCross";

const button_sx = { color: '#ffffff', backgroundColor: '#3f6e8c', border: '3px dotted #e3d4b5', width:"100px"}

const buttons = [
  <Button sx={button_sx} key="one" component={Link} to="/">
    One Card Reading
  </Button>,
  <Button sx={button_sx} className="custom-button" key="three" component={Link} to="/threecard">
    Three Card Reading
  </Button>,
  <Button sx={button_sx} className="custom-button" key="celtic" component={Link} to="/celticcross">
    Celtic Cross Reading
  </Button>,
];

function App() {
  return (
    <>
      <Router>
        <div>
          <center>
            <nav>
              <ButtonGroup aria-label="Vertical button group">
                {buttons}
              </ButtonGroup>
            </nav>
          </center>

          <Routes>
            <Route path="/" element={<OneCard />} />
            <Route path="/threecard" element={<ThreeCard />} />
            <Route path="/celticcross" element={<CelticCross />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
