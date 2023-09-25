import styled from "styled-components";


export const Container = styled.body` 
     @media(max-width: 520px){
          padding: 1rem 1rem 0px;
          flex-direction: column; 
          align-items: center;
          justify-content: start ;  
     }
     @media (min-width: 521px) and (max-width: 1040px){
          flex-direction: column;  
          padding: 2rem 2rem 0px;
          align-items: center;
          max-height: 540px;
          justify-content: start ;  
     }
     @media(min-width: 1041px){
          padding: 4rem 4rem 0px;
          max-height: 421px;
          justify-content: space-between ; 
     }
     display: flex;
     height: 100%;
     max-height: 600px;
     
     
`;
export const Description = styled.section`
     @media(max-width: 520px){
          max-width: 540px;
     }
     @media(min-width: 521px) and (max-width: 1040px){
          max-width: 540px;
     }
     @media(min-width: 1041px){
          max-width: 540px;
     }
     width: 100%;
`;

export const ImageContainer = styled.aside`  
@media(max-width: 520px){
     max-width: 540px;
     padding-top: 1rem;
     height: 400px;
     max-height: 400px;  
}
     max-width: 540px;
     height: 541px;
     max-height: 541px;  
     
`;

export const ProfessionalImage = styled.img`
     width: 100%;

`


