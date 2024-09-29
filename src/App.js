import logo from './logo.svg';
import './App.css';
import cardData from './tarot_information.json';
import React, {useState, useEffect} from 'react';

let cardIds = Object.keys(cardData);
let imageAngles = [{transform:"rotate(0deg)"},{transform:"rotate(180deg)"}];


function App() {
  let imagesPath = "./tarot_images/"
  let imagesFileType = ".jpg"
  const [card, setCard] = useState("M0");
  const [imagePath, setImagePath] = useState(imagesPath+card+imagesFileType);
  const [reversed, setReversed] = useState({transform:"rotate(0deg)"});

  const selectCard = () => {
    let item = cardIds[Math.floor(Math.random()*cardIds.length)];
    let reversedOrNot = imageAngles[Math.floor(Math.random()*imageAngles.length)];
    setCard(item);
    setImagePath(imagesPath+item+imagesFileType);
    setReversed(reversedOrNot);
  }

  return (
    <>
      <button onClick={selectCard}>Generate My Reading</button>
      {card}
      <br></br>
      <img src={imagePath} width="300" style={reversed}/>
    </>
  );
}

export default App;
