import "./App.css";
import React from "react";
import ActionAreaCard from "./components/card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ThreeCard from "./ThreeCard";

function OneCard() {
  return (
    <>
      <center>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item container spacing={2} justifyContent="center">
            <Grid item>
              <ActionAreaCard placeholderDescription={"Think of a question. When you are ready, click the button to get your reading."}
              />
            </Grid>
          </Grid>
        </Box>
        <br></br>
      </center>
    </>
  );
}

const buttons = [
  <Button key="one" component={Link} to="/">
    One Card Reading
  </Button>, // Use Link for navigation
  <Button key="three" component={Link} to="/threecard">
    Three Card Reading
  </Button>, // Use Link for navigation
  // <Button key="celtic">Celtic Cross Reading</Button>,  // No Link, so it remains a normal button
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
