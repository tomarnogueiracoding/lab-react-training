import { useState } from 'react';
import './Dice.css';
import emptyDice from '../../assets/images/dice-empty.png';
import diceOne from '../../assets/images/dice1.png';
import diceTwo from '../../assets/images/dice2.png';
import diceThree from '../../assets/images/dice3.png';
import diceFour from '../../assets/images/dice4.png';
import diceFive from '../../assets/images/dice5.png';
import diceSix from '../../assets/images/dice6.png';

function Dice() {
  const [image, setImage] = useState(emptyDice);

  const allDice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  const toggleImage = () => {
    setTimeout(
      () => setImage(allDice[Math.floor(Math.random() * (allDice.length - 1))]),
      1000
    );
  };

  return (
    <div>
      <img className="dice-image" onClick={toggleImage} src={image} />
    </div>
  );
}

export default Dice;
