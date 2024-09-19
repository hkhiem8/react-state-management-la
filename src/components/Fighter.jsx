const Fighter = ({fighter, index, handleAddFighter}) => {
    return (
    <li key={index}>
    <img src={fighter.img} alt={fighter.name} />
    <div>{fighter.name}</div>
    <div>Price: {fighter.price}</div>
    <div>Strength: {fighter.strength}</div>
    <div>Agility: {fighter.agility}</div>
    <button onClick={() => handleAddFighter(fighter)}>Add</button>
  </li> )
};

export default Fighter;