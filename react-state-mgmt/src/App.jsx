import { useFormState } from "react-dom";
import { useState } from "react";
import "./App.css"
import Fighters from "./components/fighters/fighters"
import Team from "./components/team/team"
import Money from "./components/money/money";
import TeamAgility from "./components/teamAgility/teamAgility";
import TeamStrength from "./components/teamStrength/teamStrength";

const App = () => {
  
  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);
  const [teamAgility, setTeamAgility] = useState(0);
  const [teamStrength, setTeamStrength] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])
  



  
  return (
    <>
    <h1>Zombie Fighters</h1>
    <Money money={money} />
    <TeamStrength teamStrength={teamStrength} />
    <TeamAgility teamAgility={teamAgility} />
    <Team fighterLists={zombieFighters} setFighterLists={setZombieFighters} teamLists={team} setTeamLists={setTeam} money={money} setMoney={setMoney} teamStrength={teamStrength} setTeamStrength={setTeamStrength} teamAgility={teamAgility} setTeamAgility={setTeamAgility}/>
    <h2>Fighters</h2>
    <Fighters fighterLists={zombieFighters} setFighterLists={setZombieFighters} teamLists={team} setTeamLists={setTeam} money={money} setMoney={setMoney} teamStrength={teamStrength} setTeamStrength={setTeamStrength} teamAgility={teamAgility} setTeamAgility={setTeamAgility}/>
    </>
  );
}

export default App
