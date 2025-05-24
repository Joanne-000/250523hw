import HandleAddBtn from "../handleAddBtn/handleAddBtn"

const Details = (props,{fighterLists,newFighterLists,teamLists,newTeamLists}) =>{


    return(
        <>
        <ul>
            <li>
            <img href={props.img}></img>
            <h3>{props.name}</h3>
            <p>Price: {props.price}</p>
            <p>Strength: {props.strength}</p>
            <p>Agility: {props.agility}</p>
            <button onClick={() => HandleAddBtn(props)}>Add</button>
            </li>
        </ul>
        </>
)}
 export default Details