import TeamDetails from "./TeamDetails"

const Team = (props) =>{
const teamLists = props.teamLists
const setTeamLists = props.setTeamLists
const fighterLists = props.fighterLists
const setFighterLists = props.setFighterLists
const money=props.money
const setMoney=props.setMoney
const teamAgility=props.teamAgility
const setTeamAgility=props.setTeamAgility
const teamStrength=props.teamStrength
const setTeamStrength=props.setTeamStrength

    return(
        <>
    <h2>Team</h2> 
    <div>{teamLists.length === 0 ? `Pick some team members`: ""}</div>
        {teamLists.map((member)=>(
            <TeamDetails 
            key={member.id} 
            member={member}
            teamLists={teamLists}
            setTeamLists={setTeamLists}
            fighterLists={fighterLists}
            setFighterLists={setFighterLists}
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


export default Team