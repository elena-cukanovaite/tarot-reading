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
                    <b>1. Present Position:</b> Represents your current
                    situation or focus.
                  </li>
                  <li>
                    <b>2. Challenge:</b> Indicates obstacles or what’s crossing
                    you.
                  </li>
                  <li>
                    <b>3. Past Influence:</b> Highlights past events shaping the
                    situation.
                  </li>
                  <li>
                    <b>4. Future Influence:</b> Suggests upcoming influences or
                    events.
                  </li>
                  <li>
                    <b>5. Conscious Goal:</b> Shows what you hope to achieve or
                    are actively working toward.
                  </li>
                  <li>
                    <b>6. Subconscious Influence:</b> Reveals underlying
                    feelings, desires, or fears.
                  </li>
                  <li>
                    <b>7. Advice/Approach:</b> Suggests the best way to handle
                    the situation.
                  </li>
                  <li>
                    <b>8. External Environment:</b> Reflects how others or
                    external factors affect you.
                  </li>
                  <li>
                    <b>9. Hopes and Fears:</b> Indicates your aspirations or
                    anxieties related to the situation.
                  </li>
                  <li>
                    <b>10. Outcome:</b> Provides a possible result based on
                    current energies and actions.
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
                <Typography
                  sx={{ ...sx, maxWidth: widthInput }}
                  variant="h4"
                  gutterBottom
                >
                  5. Conscious Goal
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
                  <Typography
                    sx={{ ...sx, maxWidth: widthInput }}
                    variant="h4"
                    gutterBottom
                  >
                    3. Past Influence
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
                    <Typography
                      sx={{ ...sx, maxWidth: widthInput }}
                      variant="h4"
                      gutterBottom
                    >
                      1. Present Position
                    </Typography>
                    <ActionAreaCard
                      placeholderDescription=""
                      widthInput={widthInput}
                    />
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{ ...sx, maxWidth: widthInput }}
                      variant="h4"
                      gutterBottom
                    >
                      2. Challenge
                    </Typography>
                    <ActionAreaCard
                      placeholderDescription=""
                      widthInput={widthInput}
                    />
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography
                    sx={{ ...sx, maxWidth: widthInput }}
                    variant="h4"
                    gutterBottom
                  >
                    6. Subconscious Influence
                  </Typography>
                  <ActionAreaCard
                    placeholderDescription=""
                    widthInput={widthInput}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ ...sx, maxWidth: widthInput }}
                  variant="h4"
                  gutterBottom
                >
                  4. Future Influence
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
                <Typography
                  sx={{ ...sx, maxWidth: widthInput }}
                  variant="h4"
                  gutterBottom
                >
                  10. Outcome
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
              <Typography
                  sx={{ ...sx, maxWidth: widthInput }}
                  variant="h4"
                  gutterBottom
                >
                  9. Hopes and Fears
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
              <Typography
                  sx={{ ...sx, maxWidth: widthInput }}
                  variant="h4"
                  gutterBottom
                >
                  8. External Environment
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
              <Typography
                  sx={{ ...sx, maxWidth: widthInput }}
                  variant="h4"
                  gutterBottom
                >
                  7. Advice/Approach
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
