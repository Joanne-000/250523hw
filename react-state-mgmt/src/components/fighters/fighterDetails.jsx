import HandleAddBtn from "./handleAddBtn"

const FighterDetails = (props) =>{
    const fighter = props.fighter

    return(
        <>
        <ul>
            <li>
            <img href={fighter.img}></img>
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => HandleAddBtn(props)}>Add</button>
            </li>
        </ul>
        </>
)}
 export default FighterDetails