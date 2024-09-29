import logo from './logo.svg';
import './App.css';
import cardData from './tarot_information.json';
import React, {useState, useEffect} from 'react';



function App() {
  let imagesPath = "./tarot_images/"
  let imagesFileType = ".jpg"
  const [card, setCard] = useState("M0");
  const [imagePath, setImagePath] = useState(imagesPath+card+imagesFileType);

  const selectCard = () => {
    let cardIds = Object.keys(cardData);
    let item = cardIds[Math.floor(Math.random()*cardIds.length)]
    setCard(item);
    setImagePath(imagesPath+item+imagesFileType)
  }

  return (
    <>
      <button onClick={selectCard}>Generate My Reading</button>
      {card}
      <br></br>
      <img src={imagePath} width="300" />
    </>
  );
}

export default App;
