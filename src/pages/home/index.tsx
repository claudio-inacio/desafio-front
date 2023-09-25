import React from "react";
import { ButtonContainer, Container, Description, HomeImage, ImageContainer, Message, Tittle} from "./indexStyle";
import Button from "../../components/Button";
import Logo from './../../Imgs/logo.png'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  
  return (
  
    <Container>
      <Description>
        <Tittle>Boas Vindas a Lacrei Saúde </Tittle>
        <Message>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Message>
        <ButtonContainer>
          <Button buttonfilled='true' onClick={() => navigate('/pessoa-usuaria')}>Pessoa Usuária </Button>
          <Button  onClick={() => navigate('/profissional')}>Profissional </Button>
        </ButtonContainer>
      </Description> 
      <ImageContainer>
        <HomeImage  src={Logo} alt='imagem pagina Inicial'/> 
      </ImageContainer>
    </Container>


  
  );
};
