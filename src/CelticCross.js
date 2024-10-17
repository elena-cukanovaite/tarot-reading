import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ActionAreaCard from "./components/card";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

let widthInput = 200;

const CelticCross = () => {
  return (
    <>
      <center>
        <Box sx={{ width: "100%" }}>
          <Grid container justifyContent="center">
            <Paper elevation={0}>
              <Typography gutterBottom variant="h2" component="div">
                Celtic Cross Reading
              </Typography>
              <Typography
                variant="body2"
                width="900px"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </Paper>
          </Grid>
        </Box>
        <br></br>

        <Box sx={{ width: "100%" }}>
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
                  5 - Past influences which are fading away
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
                    3 - What you known
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
                >
                  <Grid item>
                    <Typography variant="h7" gutterBottom>
                      1 - You
                    </Typography>
                    <ActionAreaCard
                      placeholderDescription=""
                      widthInput={widthInput}
                    />
                  </Grid>

                  <Grid item>
                    <Typography variant="h7" gutterBottom>
                      2 - Obstacles facing you
                    </Typography>
                    <ActionAreaCard
                      placeholderDescription=""
                      widthInput={widthInput}
                      //rotateCardComponent={90}
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
                    showHeader={"Emergence"}
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
                  10 - What will come
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
                <Typography variant="h7" gutterBottom>
                  9 - What you want and fear
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
                <Typography variant="h7" gutterBottom>
                  8 - The circumstances surrounding your situation
                </Typography>
                <ActionAreaCard
                  placeholderDescription=""
                  widthInput={widthInput}
                />
              </Grid>

              <Grid item>
                <Typography variant="h7" gutterBottom>
                  7 - Your current state of mind
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
