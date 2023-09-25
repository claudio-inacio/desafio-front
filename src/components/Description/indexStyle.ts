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
     font-size: 3rem;
        
     
`;

export const MessageContainer = styled.div`
@media(max-width: 1040px){     
     margin-top: 15px;
     padding-left: 15px;
     border-left: 5px solid var(--color-primary);
}
     
     margin-top: 2rem;
     padding-left: 2rem;
     border-left: 5px solid var(--color-primary);
    
`
export const Message = styled.p`
@media(max-width: 520px){
     font-size: 0.80rem;   
     line-height: 1.25rem;
}
@media(min-width: 521px) and (max-width: 1040px){
     line-height: 1.35rem;
     font-size: 1.1rem;
}
@media(min-width: 1041px){
     line-height: 2rem;
     font-size: 1.5rem;
}
color: var(--color-reference-text)
   
`


