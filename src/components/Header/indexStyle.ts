import styled from "styled-components";

interface Props{
     selected?: boolean;
}

export const Container = styled.div`  
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

export const Tittle = styled.a`
@media(max-width: 520px){}
     color: var(--color-primary);
     width: 89px;
     height: 45px;
     font-size: 32px;
     font-weight: bold;
     margin-left: 32px;
`
export const NavBar = styled.nav`
@media(max-width: 520px){
     justify-content: center;
}
     display: flex;
     justify-content: end;     
     width: 100%;     
`

export const NavItem = styled.li`
     @media(max-width: 520px){
          font-size: 0.85rem;
     }         
     margin-left: 10px;
     font-weight: bold;
     list-style: none;
     
     &:last-child{
     margin-right: 15px;
     }
`

export const NavText = styled.a<Props>`
     @media(max-width: 520px){
          padding: 0px;
     }
     color: ${props => props.selected ? 'var(--color-primary)': 'black'};
     padding-left: 10px;
     padding-right: 10px;

`
