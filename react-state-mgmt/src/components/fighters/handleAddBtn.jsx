
const HandleAddBtn = (props) =>{
const selectedID = props.id;

const newTeamMember = props;

newTeamLists([...teamLists, newTeamMember]);

const newFLists = fighterLists.filter(item => item.id !== selectedID);
newFighterLists(newFLists)

}

export default HandleAddBtn