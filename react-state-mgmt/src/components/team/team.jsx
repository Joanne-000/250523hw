const Team = ({teamLists,newTeamLists}) =>{
    const MemberDetails = (props) =>{

        return(
            <>
            <ul>
                <li>
                <img href={props.img}></img>
                <h3>{props.name}</h3>
                <p>Price: {props.price}</p>
                <p>Strength: {props.strength}</p>
                <p>Agility: {props.agility}</p>
                <button onClick={() => HandleRemoveBtn(props)}>Remove</button>
                </li>
            </ul>
            </>
    )}

    return(
        <>
    <h2>Team</h2> 
    <div>Pick some team members</div>
        {teamLists.map((teamList)=>(
            <MemberDetails 
            key={teamList.id} 
            id={teamList.id} 
            href={teamList.img} 
            name={teamList.name} 
            price={teamList.price} 
            strength={teamList.strength} 
            agility={teamList.agility}
            />
        ))}
        </>
    )
}


export default Team