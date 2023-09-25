import React from "react";
import {  Container, Description, ProfessionalImage, ImageContainer} from "./indexStyle";
import Profissional from './../../Imgs/profissional.png'
import DescriptionComponent from "../../components/Description";


export const Professional = () => {
  return (
  
    <Container>
      <Description>
      <DescriptionComponent 
        tittle="Profissional" 
        lateralBar
        message='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+'
        />
        </Description>
      <ImageContainer>
        <ProfessionalImage  src={Profissional} alt='imagem pagina Inicial'/> 
      </ImageContainer>
    </Container>


  
  );
};
