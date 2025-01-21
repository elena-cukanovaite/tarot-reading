import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ActionAreaCard from "./components/card";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

let widthInput = 300;
const sx = {
  color: "#ffffff",
  backgroundColor: "#3f6e8c",
  border: "3px dotted #e3d4b5",
};

const CelticCross = () => {
  return (
    <>
      <center>
        <Box>
          <Grid container justifyContent="center">
            <Paper sx={sx} elevation={0}>
              <Typography gutterBottom variant="h2" component="div">
                Celtic Cross Reading
              </Typography>
              <Typography variant="body2">
                The Celtic Cross is a popular tarot spread that provides a
                detailed overview of a situation. It consists of 10 cards laid
                out in a specific pattern:
                <br></br>
                <br></br>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li>
                    <b>Present Position:</b> Represents your current situation
                    or focus.
                  </li>
                  <li>
                    <b>Challenge:</b> Indicates obstacles or what’s crossing
                    you.
                  </li>
                  <li>
                    <b>Past Influence:</b> Highlights past events shaping the
                    situation.
                  </li>
                  <li>
                    <b>Future Influence:</b> Suggests upcoming influences or
                    events.
                  </li>
                  <li>
                    <b>Conscious Goal:</b> Shows what you hope to achieve or are
                    actively working toward.
                  </li>
                  <li>
                    <b>Subconscious Influence:</b> Reveals underlying feelings,
                    desires, or fears.
                  </li>
                  <li>
                    <b>Advice/Approach:</b> Suggests the best way to handle the
                    situation.
                  </li>
                  <li>
                    <b>External Environment:</b> Reflects how others or external
                    factors affect you.
                  </li>
                  <li>
                    <b>Hopes and Fears:</b> Indicates your aspirations or
                    anxieties related to the situation.
                  </li>
                  <li>
                    <b>Outcome:</b> Provides a possible result based on current
                    energies and actions.
                  </li>
                </ul>
                <br></br>
                The spread offers insight into various dimensions of a question,
                combining conscious and unconscious factors, external
                influences, and potential outcomes.
              </Typography>
            </Paper>
          </Grid>
        </Box>
        <br></br>

        <Box>
          <Grid item container spacing={2} justifyContent="center">
            <Grid
              item
              container
              spacing={2}
              direction="column"
              justifyContent="left"
            >
              <Grid item>
                <Typography variant="h7" gutterBottom>
                  5
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid
                item
                container
                spacing={2}
                direction="row"
                justifyContent="left"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h7" gutterBottom>
                    3
                  </Typography>
                  <ActionAreaCard
                    placeholderDescription=""
                    widthInput={widthInput}
                  />
                </Grid>

                <Grid
                  item
                  container
                  spacing={2}
                  direction="column"
                  justifyContent="left"
                  display="flex"
                  width={500}
                >
                  <Grid item>
                    <Typography variant="h7" gutterBottom>
                      1
                    </Typography>
                    <ActionAreaCard
                      placeholderDescription=""
                      widthInput={widthInput}
                    />
                  </Grid>

                  <Grid item>
                    <Typography variant="h7" gutterBottom>
                      2
                    </Typography>
                    <ActionAreaCard
                      placeholderDescription=""
                      widthInput={widthInput}
                      componentRotationInput={90}
                    />
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography variant="h7" gutterBottom>
                    6
                  </Typography>
                  <ActionAreaCard
                    placeholderDescription=""
                    widthInput={widthInput}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h7" gutterBottom>
                  4
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                  showHeader={"Basis"}
                />
              </Grid>
            </Grid>

            <Grid
              item
              container
              spacing={2}
              direction="column"
              justifyContent="left"
            >
              <Grid item>
                <Typography variant="h7" gutterBottom>
                  10
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
                <Typography variant="h7" gutterBottom>
                  9
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
                <Typography variant="h7" gutterBottom>
                  8
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
                <Typography variant="h7" gutterBottom>
                  7
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <br></br>
      </center>
    </>
  );
};

export default CelticCross;
