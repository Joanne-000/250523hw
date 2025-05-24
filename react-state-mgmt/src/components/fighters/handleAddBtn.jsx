const HandleAddBtn = (props) =>{
    const fighter = props.fighter
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

    const selectedID = fighter.id;
    const newTeamMember = fighter;

    let balance = money
    let totalTeamAgility = teamAgility
    let totalTeamStrength = teamStrength

    if(balance < fighter.price){
        console.log("Not enough money")
    }else{
        setTeamLists([...teamLists, newTeamMember]);
        
        const newFLists = fighterLists.filter(item => item.id !== selectedID);
        setFighterLists(newFLists)
        
        balance = balance - fighter.price;
        setMoney(balance)

        totalTeamAgility= totalTeamAgility + fighter.agility;
        setTeamAgility(totalTeamAgility)

        totalTeamStrength= totalTeamStrength + fighter.strength;
        setTeamStrength(totalTeamStrength)
    }
    }

export default HandleAddBtn