// import Details from "../details/details"
// import Images from "../images/images"

const Fighters = ({fighterLists,newFighterLists,teamLists,newTeamLists}) =>{
    
    const Details = (props) =>{
        const HandleAddBtn = (props) =>{
            console.log("add",props)
        const selectedID = props.id;
        console.log("add",selectedID)

        const newTeamMember = props;
        console.log("add",newTeamMember)
        console.log("add",teamLists)

        newTeamLists([...teamLists, newTeamMember]);

        const newFLists = fighterLists.filter(item => item.id !== selectedID);
        newFighterLists(newFLists)
    
        }


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

    return(
        <>
    
        {fighterLists.map((fighterList)=>(
            <Details 
            key={fighterList.id} 
            id={fighterList.id} 
            href={fighterList.img} 
            name={fighterList.name} 
            price={fighterList.price} 
            strength={fighterList.strength} 
            agility={fighterList.agility}
            />
        ))}
        </>
    )
}

export default Fighters