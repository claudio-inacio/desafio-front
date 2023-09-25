import React from "react";
import {  Container, Description, PersonImage, ImageContainer} from "./indexStyle";
import Person from './../../Imgs/person.png'
import DescriptionComponent from "../../components/Description";


export const UserPerson = () => {
  return (
  
    <Container>
      <Description>
      <DescriptionComponent 
        tittle="Pessoa Usuária" 
        lateralBar
        message='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
        />
        </Description>
      <ImageContainer>
        <PersonImage  src={Person} alt='imagem pagina Inicial'/> 
      </ImageContainer>
    </Container>


  
  );
};
