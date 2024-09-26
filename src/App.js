import logo from './logo.svg';
import './App.css';
import cardData from './tarot_information.json';
import React, {useState, useEffect} from 'react';

function App() {
  const [card, setCard] = useState("M0");
  const [imagePath, setImagePath] = useState("./"+card+".jpg");

  const selectCard = () => {
    let cardIds = Object.keys(cardData);
    let item = cardIds[Math.floor(Math.random()*cardIds.length)]
    setCard(item);
    setImagePath("./"+item+".jpg")
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
