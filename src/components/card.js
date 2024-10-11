import React, { useState } from 'react';
import cardData from "../tarot_information.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

let cardIds = Object.keys(cardData);
let imageAngles = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(180deg)" },
];
let nameSuffix = ["", " reversed"];
let theAnswerUprightOrReversed = ["upright", "reverse"];

const ActionAreaCard = ({placeholderDescription, widthInput = 300, rotateCardComponent = 0}) => {
    console.log(placeholderDescription);
    const theme = useTheme();
    let imagesPath = "./tarot_images/";
    let imagesFileType = ".jpg";
    //let rotateCardComponentString = 'rotate('+String(rotateCardComponent)+'deg)';
    const [imagePath, setImagePath] = useState(
      imagesPath + "back_of_card" + imagesFileType
    );
    const [reversed, setReversed] = useState({ transform: "rotate(0deg)", width: widthInput});
    const [cardName, setCardName] = useState("");
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
      <Card sx={{ maxWidth: widthInput}}> {/* , transform: rotateCardComponentString}}> */}
        <CardActionArea>
          <CardMedia
            component="img"
            imageWidth={300}
            image={imagePath}
            sx={reversed}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {theAnswer}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button onClick={selectCard}> I am ready for the answer</Button>
      </Card>
    );
  }

export default ActionAreaCard;