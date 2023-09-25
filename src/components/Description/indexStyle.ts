import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`  
     @media(max-width: 1040px){
          flex-direction: column;          
          font-size: 1.5rem;          
     }
      
`;

export const Tittle = styled.h1`  
     @media(max-width: 1040px){
          font-size: 24px;
     }
        
     
`;

export const MessageContainer = styled.div`
@media(max-width: 1040px){     
     margin-top: 8px;
     padding-left: 15px;
     border-left: 5px solid var(--color-primary);
}
    
`
export const Message = styled.text`
@media(max-width: 1040px){
     font-size: 14px;   
     line-height: 1;
}
color: var(--color-reference-text)
   
`


