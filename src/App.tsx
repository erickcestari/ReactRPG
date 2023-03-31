import { useEffect } from 'react';
import * as C from './app.style'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter';
import { binarySearch } from './helpers/binarySearch';



function App() {
  const char  = useCharacter();
  //const list = [-1,0,1,2,3,4,9]
  //console.log(binarySearch(list,8))
  useEffect(() =>{
    window.addEventListener('keydown', handleKeyDown)
  },[])

  const handleKeyDown = (e: KeyboardEvent) =>{
    
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        if(char.state === 'stand')char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
      case 'KeyE':
      case 'Space':
        char.changeState('attack')
      break;
    
    }
    
  }
  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} state={char.state} changeState={char.changeState}/>
      </C.Map>
    </C.Container>
  );
}

export default App;
