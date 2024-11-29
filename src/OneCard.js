
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ActionAreaCard from "./components/card";

function OneCard() {
    return (
      <>
        <center>
          <Box>
            <Grid item container justifyContent="center">
              <Grid item>
                <ActionAreaCard
                  placeholderDescription={
                    "When you are ready, click the button to get your reading."
                  }
                  placeholderTitle={"Think of a question"}
                />
              </Grid>
            </Grid>
          </Box>
          <br></br>
        </center>
      </>
    );
  }

export default OneCard;