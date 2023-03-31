import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';
type Props ={
    x: number;
    y: number;
    side: CharacterSides;
    name:string;
    state:string;
    changeState:(state:string) => void;
}

export const Character = ({x,y, side,name,state,changeState}:Props) =>{
    let color = 'white'

    console.log(x,y,side, state)
    
    if(state === 'attack'){
        color = 'red'
        setTimeout(() =>{changeState('stand')}, 1000)
    }
    const size = 30
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return(
        <div>
            
            <C.Container
                size={size}
                left={x * size}
                top={y * size}
                side={sides[side] ?? 0}
            >
            <C.Name>{name}</C.Name>
            {state === 'attack' &&
            <C.Attack Color={color} ver={side == 'down' || side == 'up'?side=='down'?30:-30:0} hor={side == 'left' || side == 'right'?side=='right'?30:-30:0}></C.Attack>
            }
            
            </C.Container>
        </div>
    )
}

export default Character