import logo from './logo.svg';
import './App.css';
import cardData from './tarot_information.json';
import React, {useState, useEffect} from 'react';

let cardIds = Object.keys(cardData);
let imageAngles = [{transform:"rotate(0deg)"}, {transform:"rotate(180deg)"}];
let nameSuffix = ["", " reversed"];
let theAnswerUprightOrReversed = ["upright", "reverse"];

function App() {
  let imagesPath = "./tarot_images/"
  let imagesFileType = ".jpg"
  const [card, setCard] = useState("M0");
  const [imagePath, setImagePath] = useState(imagesPath+card+imagesFileType);
  const [reversed, setReversed] = useState({transform:"rotate(0deg)"});
  const [cardName, setCardName] = useState("The Fool");
  const [theAnswer, setTheAnswer] = useState("");

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
      <button onClick={selectCard}>Generate My Reading</button>
      <br></br>
      <h1>{cardName}</h1>
      <img src={imagePath} style={reversed}/>
      <p>{theAnswer}</p>
      </center>
    </>
  );
}

export default App;
