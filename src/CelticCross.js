import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ActionAreaCard from "./components/card";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

let widthInput = 300;

const CelticCross = () => {
  return (
    <>
      <center>
        <Box>
          <Grid container justifyContent="center">
            <Paper elevation={0}>
              <Typography gutterBottom variant="h2" component="div">
                Celtic Cross Reading
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              ></Typography>
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
