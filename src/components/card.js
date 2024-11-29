import "./card.css";
import React, { useState } from "react";
import cardData from "../tarot_information.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

let cardIds = Object.keys(cardData);
let imageAngles = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(180deg)" },
];
let nameSuffix = ["", " reversed"];
let theAnswerUprightOrReversed = ["upright", "reverse"];

const ActionAreaCard = ({
  placeholderDescription,
  placeholderTitle,
  widthInput = "300px",
  componentRotationInput = "0",
}) => {
  let imagesPath = "./tarot_images/";
  let imagesFileType = ".jpg";
  let componentRotation = "rotate(" + componentRotationInput + "deg)";

  const [imagePath, setImagePath] = useState(
    imagesPath + "back_of_card" + imagesFileType
  );
  const [reversed, setReversed] = useState({
    transform: "rotate(0deg)",
    width: widthInput,
  });
  const [cardName, setCardName] = useState(placeholderTitle);
  const [theAnswer, setTheAnswer] = useState(placeholderDescription);

  const selectCard = () => {
    let item = cardIds[Math.floor(Math.random() * cardIds.length)];
    let reversedId = Math.floor(Math.random() * imageAngles.length);
    let reversedOrNot = imageAngles[reversedId];
    let selectedCardName = cardData[item].name;
    let selectedAnswer =
      cardData[item][theAnswerUprightOrReversed[reversedId]]["general"];

    setCardName(selectedCardName + nameSuffix[reversedId]);
    setImagePath(imagesPath + item + imagesFileType);
    setReversed(reversedOrNot);
    setTheAnswer(selectedAnswer);
  };

  return (
    <Card className='custom-card'
      onClick={selectCard}
      sx={{ maxWidth: widthInput, transform: componentRotation }}
    >
      <CardActionArea>
        <Typography className='custom-card-title' gutterBottom variant="h5" component="div">
          {cardName}
        </Typography>
        <Typography className='custom-card-answer' variant="body2" color="inherit">
          {theAnswer}
        </Typography>
        <CardMedia className='custom-card-media' component="img" image={imagePath} sx={reversed} />
        {
          <CardContent className="custom-card-content"
          // sx={{
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   height: "100%",
          //   width: "90%",
          //   backgroundColor: "rgba(0, 0, 0, 0.7)",
          //   overflowY: "auto",
          //   color: "white",
          //   opacity: 0,
          //   transition: "opacity 0.3s ease",
          //   "&:hover": {
          //     opacity: 1,
          //   },
          // }}
          ></CardContent>
        }
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
