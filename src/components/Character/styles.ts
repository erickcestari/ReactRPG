import styled from "styled-components";


export const Container = styled.div<{size:number, left:number, top:number, side:number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    background-image: url('/assets/char.png');
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-position: 0px ${props => props.side}px;
`

export const Name = styled.div`
    
    justify-content: center;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    background: white;
    color: black;
    padding: 10px;
    border-radius: 15px;
    width: 30px;
    margin-left: -10px;
    margin-top: -40px;
`


export const Attack = styled.div<{Color?:string, hor:number, ver:number}>`
    position: absolute;
    background: ${props => props.Color};
    left: ${props => props.hor}px;
    top: ${props => props.ver}px;
    color: black;
    width: 30px;
    height: 30px;

    justify-content: center;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
`