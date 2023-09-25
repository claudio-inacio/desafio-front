import React from "react";
import { Container, Description, DescriptionButtons, Divider, HomeImage, InfoComplementary, Message, MessageContainer, TitleContainer, Tittle } from "./indexStyle";
import Button from "../../components/Button";

import Logo from './../../Imgs/logo.png'


export const Home = () => {
  return (
  
    <Container>
    
      <Description>
        
        
        <TitleContainer>
          <Tittle>Boas Vindas a Lacrei Saúde </Tittle>
        </TitleContainer>
        <MessageContainer>
          <Message>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Message>
        </MessageContainer>
        <DescriptionButtons>
        
          <Button buttonfilled='true' onClick={() => console.log('teste')}>Pessoa Usuária </Button>
          <Button  onClick={() => console.log('teste')}>Profissional </Button>
        </DescriptionButtons>
      </Description>
      <InfoComplementary>
          <HomeImage  src={Logo} alt='Logo pagina Inicial'/>          
      </InfoComplementary>
      
        {/* <Divider/> */}
    </Container>


  
  );
};
