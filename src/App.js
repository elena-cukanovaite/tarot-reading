import logo from './logo.svg';
import './App.css';
import cardData from './tarot_information.json';
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

let cardIds = Object.keys(cardData);
let imageAngles = [{transform:"rotate(0deg)"}, {transform:"rotate(180deg)"}];
let nameSuffix = ["", " reversed"];
let theAnswerUprightOrReversed = ["upright", "reverse"];

const ActionAreaCard = ({imagePathInput, cardNameInput, cardDescriptionInput, reversedInput, functionInput}) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="300"
          image={imagePathInput}
          sx={reversedInput}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardNameInput}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {cardDescriptionInput}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={functionInput}> I am ready for the answer</Button>
    </Card>
  );
}

function App() {
  let imagesPath = "./tarot_images/"
  let imagesFileType = ".jpg"
  const [card, setCard] = useState("");
  const [imagePath, setImagePath] = useState(imagesPath+"back_of_card"+imagesFileType);
  const [reversed, setReversed] = useState({transform:"rotate(0deg)"});
  const [cardName, setCardName] = useState("");
  const [theAnswer, setTheAnswer] = useState("Think of a question. When you are ready, click the button to get your reading.");

  const selectCard = () => {
    let item = cardIds[Math.floor(Math.random()*cardIds.length)];
    let reversedId = Math.floor(Math.random()*imageAngles.length);
    let reversedOrNot = imageAngles[reversedId];
    let selectedCardName = cardData[item].name;
    let selectedAnswer = cardData[item][theAnswerUprightOrReversed[reversedId]]["general"];

    setCard(item);
    setCardName(selectedCardName + nameSuffix[reversedId]);
    setImagePath(imagesPath+item+imagesFileType);
    setReversed(reversedOrNot);
    setTheAnswer(selectedAnswer);
  }

  return (
    <>
      <center>
      {/* <button onClick={selectCard}>Generate My Reading</button>
      <br></br> */}
      {/* <br></br>
      <h1>{cardName}</h1>
      <img src={imagePath} style={reversed}/>
      <p>{theAnswer}</p> */}
      <br></br>
      <ActionAreaCard imagePathInput = {imagePath} cardNameInput = {cardName} 
      cardDescriptionInput = {theAnswer}
      reversedInput = {reversed}
      functionInput={selectCard}/>
      </center>
      
    </>
  );
}

export default App;
