import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.footer`  
     @media(max-width: 520px){
          justify-content: center;
          padding: 1rem 0px 0.5rem;
          margin: 0px 0.5rem;
          
     }
     flex-direction: column;
     align-items: center;
     justify-content: start;
     border-top: 2px solid var(--color-primary);
     margin-left: 2rem;
     margin-right: 2rem;
     max-width: 100%;          
     height: 100%;
     display: flex;
     
     
`;

export const FooterNavBar = styled.nav`
@media(max-width: 520px){
     flex-direction: column;
     justify-content: center;
     gap: 10px;
}
     flex-direction: row;
     display: flex;
     padding: 30px 0px 0rem;
     gap: 40px;
     justify-content: start;     
     width: 100%;     
`

export const NavText = styled(NavLink)`
     @media(max-width: 520px){
          padding: 3px;
          font-size: 1rem;
     }
     color: black;
     cursor: pointer;
     list-style: none;
     &.active{
     font-weight: bold;
     color: black;
     };
     text-decoration: none;
`

export const SocialMediaNav = styled.nav`
@media(max-width: 520px){
     flex-direction: row;
     justify-content: start; 
     padding: 10px;
     padding-left: 30px;
     gap: 40px;
}
     display: flex;
     justify-content: start;   
     gap: 40px;
     padding: 20px;
     width: 100%;     
`
export const SocialMediaIcon = styled.a`
@media(max-width: 520px){
     font-size: 27px;
}
font-size: 25px;
 
`
export const ReferenceFooter = styled.div`
     width: 100%;
     height: 100%;
`
export const TextFooter = styled.span`
  font-size: 13px;
  color: gray;
`



