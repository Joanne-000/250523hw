
const HandleAddBtn = (props) =>{

        console.log(props)

    const selectedID = props.id;
    console.log(selectedID)



    const newTeamMember = props;
    const newTeamLists = [...team, newTeamMember];
    setTeam(newTeamLists)


    // const searchKeyPair = props.values(props).includes(props.id)
    // {const searchValue = props.indexOf(props.id)}

    // const newFighterLists = props.filter(newFList => !selectedID.includes(props.id));
    // const newTeamMember = fighterLists.filter(newTList => fighterLists.includes(selectedID));
    // const newTeamLists = [...teamLists, newTeamMember];
    // console.log(selectedID)
    // console.log(newFighterLists)
    // console.log(newTeamMember)
    // console.log(newTeamLists)

}

export default HandleAddBtn