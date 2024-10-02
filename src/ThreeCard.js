import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ActionAreaCard from "./components/card";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const ThreeCard = () => {
  return (
    <>
      <center>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center">
            <Paper elevation={0}>
              <Typography gutterBottom variant="h2" component="div">
                Three Card Reading
              </Typography>
              <Typography
                variant="body2"
                width="900px"
                sx={{ color: "text.secondary" }}
              >
                A Three-Card Tarot Spread is a simple yet powerful method for
                gaining insight into a situation. Each card represents a
                different aspect of time — Past, Present, and Future — and how
                they relate to the current situation.
                <br></br>
                <br></br>
                <b>Past card:</b> Reveals influences or events from the past
                that are affecting the current situation.
                <br></br>
                <b>Present card:</b> Unmasks the current circumstances or
                challenges you're facing.
                <br></br>
                <b>Future card:</b> Provides a glimpse of what may come,
                offering guidance on the likely outcome if things were to
                continue on the current path.
                <br></br>
                <br></br>
                This spread offers a clear perspective on how past experiences
                shape the present and what direction the future may take.
              </Typography>
            </Paper>
          </Grid>
        </Box>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item container spacing={2} justifyContent="center">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                The past
              </Typography>
              <ActionAreaCard placeholderDescription="This card represents the past. 
              Click the button once you are ready to find out how the past is affecting 
              the situation you are questioning." />
            </Grid>

            <Grid item>
              <Typography variant="h4" gutterBottom>
                The present
              </Typography>
              <ActionAreaCard placeholderDescription="This card represents the present. 
              Click the button once you are ready to find out how the present state of 
              the situation you are questioning." />
            </Grid>

            <Grid item>
              <Typography variant="h4" gutterBottom>
                The future
              </Typography>
              <ActionAreaCard placeholderDescription="This card represents the future. 
              Click the button once you are ready to find out what the future holds for 
              you." />
            </Grid>
          </Grid>
        </Box>
        <br></br>
      </center>
    </>
  );
};

export default ThreeCard;
