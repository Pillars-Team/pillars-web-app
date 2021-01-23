//import logo from 'images/logo.svg';
import 'styles/App.css';
import CharacterSheet from 'components/CharacterSheet.js';

const dummyJson = {
  character_id: 67,
  name: 'Djee-Wei',
  stats: {
    maxHp: 28,
    characterLevel: 3,
    nimble: 0,
    brawn: 3,
    mind: 1,
    armor: 'medium',
    defense: 2,
    speed: 5,
  },
  pillars: ['Indominable Will', 'Arts and Wonder'],
  passives: [
      {
          name: 'earthen form (defense)', 
          description: '<i>Your body is composed of dirt and stone.</i> <b>+1 defense</b>',
          pointCost: 2
      }
  ],
  actives: [
      {
          name: 'Heavy Throw', 
          description: '<i>You lift a stone, compacted earth, or heavy object, and throw it.</i> <b>range: 3. dmg: 4d4 bludgeoning.</b>',
          pointCost: 2,
          actions: 3
      }
  ],
  abilityPoints: 12 
};


function App() {
  return (
    <div className="App">
      <CharacterSheet characterJson={dummyJson} />
    </div>
  );
}

export default App;
