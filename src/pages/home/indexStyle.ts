import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.body`  
     @media(max-width: 1040px){
          flex-direction: column;          
          justify-content: start ;  
          align-items: center;
     }
     @media(min-width: 1041px){
          flex-direction: row;          
          justify-content: start ; 
          align-items: start;
          height: 500px;
          
     }
     display: flex;
     width: 100%;
     height: 100vw;
     
     
`;
export const Description = styled.section`  
     @media(max-width: 1040px){
     width: 100%;
     justify-content: center;
     align-items: center;     
     max-height: 250px;
     max-width: 700px;
     }
     @media(min-width: 1041px){
          width: 60%;
          max-width: 600px;
     }
`;

export const Tittle = styled.h1`  
     @media(max-width: 1040px){
          font-size: 24px;          
     }
     @media(min-width: 521px) and (max-width: 1040px){ 
          font-size: 32px;        
     }  
     @media(min-width: 1041px) { 
         font-size: 44px;
     }   
  
`;

export const TitleContainer = styled.div`
@media(max-width: 1040px){
     margin-top: 15px;
     margin-left: 25px;
}
@media(min-width: 521px) and (max-width: 1040px){ 
     padding: 2rem 3rem 0px  3rem
}    
@media(min-width: 1041px) { 
     padding: 3rem 1rem 0px  3rem
}    
`
export const MessageContainer = styled.div`
@media(max-width: 1040px){
     margin-top: 20px;
     margin-left: 25px;
}
@media(min-width: 521px) and (max-width: 1040px){ 
     padding: 0px 3rem 0px  3rem
}  
@media(min-width: 1041px) { 
     padding: 2rem 3rem 0px  3rem
}   
   
`
export const Message = styled.text`
@media(max-width: 1040px){
     font-size: 14px;   
}
@media(min-width: 521px) and (max-width: 1040px){ 
     font-size: 16px;        
}  
@media(min-width: 1041px) { 
     font-size: 1.5rem;
 }   
color: var(--color-reference-text)
   
`

export const DescriptionButtons = styled.div`  
     @media(max-width: 520px){ 
          flex-direction: column;
          justify-content: center;          
          align-items: center;
          height: 50%;
     }     
     @media(min-width: 521px) and (max-width: 1040px){ 
          margin-top: 40px;
          margin-left: 40px;
          width: 100%;
          flex-direction: row;
          justify-content: space-evenle;          
     }     
     @media(min-width: 1041px) { 
          padding: 2rem 1rem 0px  2rem;
          // margin-left: -55px;
          // background-color: red;
          justify-content: space-around
      }   
     display: flex;
`;

export const InfoComplementary = styled.aside`  
     @media(max-width: 1040px){
          max-width: 700px;
          max-height: 700px;
          width: 100%;
          height: 100%;
          margin-top: 30px;
     }
     @media(min-width: 1041px){
          width: 50%;
          display: flex;
          justify-content: center;
          margin-top: 70px;
          align-items: center;
     }
`;


export const HomeImage = styled.img`
@media(min-width: 1041px){
     height: 80%;
     max-width: 540px;
     max-height: 540px;
     width: 80%;
}
@media(min-width: 1041px){
     max-width: 540px;
     max-height: 540px;
}

`
export const Divider = styled.div` 
     height: 1px;
     width: 90%;
     background-color:var(--color-primary);
`;


