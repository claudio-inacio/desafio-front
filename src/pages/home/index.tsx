import React from "react";
import { ButtonContainer, Container, Description, HomeImage, ImageContainer, Message, Tittle} from "./indexStyle";
import Button from "../../components/Button";
import Logo from './../../Imgs/logo.png'


export const Home = () => {
  return (
  
    <Container>
    
      <Description>
        <Tittle>Boas Vindas a Lacrei Saúde </Tittle>
        <Message>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Message>
        <ButtonContainer>
          <Button buttonfilled='true' onClick={() => console.log('teste')}>Pessoa Usuária </Button>
          <Button  onClick={() => console.log('teste')}>Profissional </Button>
        </ButtonContainer>
      </Description> 
      <ImageContainer>
        <HomeImage  src={Logo} alt='imagem pagina Inicial'/> 
      </ImageContainer>
    </Container>


  
  );
};
