import FighterDetails from "./fighterDetails";

const Fighters = (props) =>{
    const fighterLists = props.fighterLists
    const setFighterLists = props.setFighterLists
    const teamLists = props.teamLists
    const setTeamLists = props.setTeamLists
    const money=props.money
    const setMoney=props.setMoney
    const teamAgility=props.teamAgility
    const setTeamAgility=props.setTeamAgility
    const teamStrength=props.teamStrength
    const setTeamStrength=props.setTeamStrength

    return(
        <>

        {fighterLists.map((fighter)=>(
            <FighterDetails 
            key={fighter.id} 
            fighter={fighter}
            fighterLists={fighterLists}
            setFighterLists={setFighterLists}
            teamLists={teamLists}
            setTeamLists={setTeamLists}
            money={money} 
            setMoney={setMoney}
            teamAgility={teamAgility}
            setTeamAgility={setTeamAgility}
            teamStrength={teamStrength}
            setTeamStrength={setTeamStrength}
            />
        ))}
        </>
    )
}

export default Fighters