import styled from 'styled-components';


export const CartContainer=styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
`


export const CartItems=styled.div`
height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;

`



export const Message=styled.span`

margin:50px auto;
font-size:larger;
`