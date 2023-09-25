import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.header`  
     @media(max-width: 520px){
          flex-direction: column;
          height: 80px;
          justify-content: center     
     }
     align-items: center;
     display: flex;
     flex-direction: row;
     background-color: var(--bg-header);
     width: 100%;
     height: 60px;          
     
     
     
`;

export const Tittle = styled(NavLink)`
@media(max-width: 520px){
}
     color: var(--color-primary);
     width: 89px;
     height: 45px;
     font-size: 32px;
     font-weight: bold;
     margin-left: 32px;
     cursor: pointer;
     text-decoration: none;
     &:hover{
          opacity: 0.7;
     }
`
export const NavBar = styled.nav`
@media(max-width: 520px){
     justify-content: center;
     margin-botton: 50px;
   
    
}
     display: flex;
     justify-content: end;     
     width: 100%;     
`


export const NavText = styled(NavLink)`
     @media(max-width: 520px){
          padding-left: 10px;
          font-size: 0.85rem;
     }
     padding-left: 10px;
     color: black;
     font-weight: bold;
     cursor: pointer;
     padding-right: 10px;
     list-style: none;
     &:hover{
          opacity: 0.7;
     };
     &.active{
     color: var(--color-primary);
     };
     &:last-child{
     margin-right: 15px;
     };
     text-decoration: none;

`
