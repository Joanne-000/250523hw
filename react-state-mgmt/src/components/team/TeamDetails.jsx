import HandleRemoveBtn from "./handleRemoveBtn"

    const TeamDetails = (props) =>{
        const member = props.member

        return(
            <>
            <ul>
                <li>
                <img href={member.img}></img>
                <h3>{member.name}</h3>
                <p>Price: {member.price}</p>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <button onClick={() => HandleRemoveBtn(props)}>Remove</button>
                </li>
            </ul>
            </>
    )}


export default TeamDetails