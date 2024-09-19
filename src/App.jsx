import { useState } from "react";
import './App.css';
import Fighter from './components/Fighter';

const zombieFightersData = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];


const App = () => {

  const [zombieFighters, setZombieFighters] = useState(zombieFightersData);
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setStrength] = useState(0);
  const [totalAgility, setAgility] = useState(0);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setStrength(totalStrength + fighter.strength);
      setAgility(totalAgility + fighter.agility);
    } else {
      console.log('Not enough money')
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((f) => fighter.name !== f.name));
    setMoney(money + fighter.price);
    setStrength(totalStrength - fighter.strength);
    setAgility(totalAgility - fighter.agility);
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((fighter, index) => (
          // <li key={index}>
          //   <img src={fighter.img} alt={fighter.name} />
          //   <div>{fighter.name}</div>
          //   <div>Price: {fighter.price}</div>
          //   <div>Strength: {fighter.strength}</div>
          //   <div>Agility: {fighter.agility}</div>
          //   <button onClick={() => handleAddFighter(fighter)}>Add</button>
          // </li>
          <Fighter fighter={fighter} handleAddFighter={handleAddFighter}/>
        ))}
      </ul>

      <h2>Your Team</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      {team.length === 0 ? <p>Pick some team members!</p> :
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <div>{fighter.name}</div>
              <div>Price: {fighter.price}</div>
              <div>Strength: {fighter.strength}</div>
              <div>Agility: {fighter.agility}</div>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      }
    </div>

  );
};

export default App;
