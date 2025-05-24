const HandleRemoveBtn = (props) =>{
    const member = props.member
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

    const selectedID = member.id;
    const newFighterMember = member

    let balance = money
    let totalTeamAgility = teamAgility
    let totalTeamStrength = teamStrength

    const newTLists = teamLists.filter(item=> item.id !== selectedID)
    setTeamLists(newTLists)

    setFighterLists([...fighterLists, newFighterMember])

    balance = balance + member.price;
    setMoney(balance)

    totalTeamAgility= totalTeamAgility - member.agility;
    setTeamAgility(totalTeamAgility)

    totalTeamStrength= totalTeamStrength - member.strength;
    setTeamStrength(totalTeamStrength)
    }

    export default HandleRemoveBtn