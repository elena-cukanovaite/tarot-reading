import logo from './logo.svg';
import './App.css';
import data from './tarot_information.json';


const readCSV = () => {
  console.log(data);
}

function App() {
  return (
    <>
      <button onClick={readCSV}>Generate My Reading</button>
    </>
  );
}

export default App;
