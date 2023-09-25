import React from 'react';
import {Container, FooterNavBar, NavText, ReferenceFooter, SocialMediaIcon, SocialMediaNav, TextFooter} from './indexStyle';
import {BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineLinkedin} from 'react-icons/ai';




const Footer = () => {
    return(
       <Container>
        <FooterNavBar>
            <NavText to="/">
                Home
            </NavText>
            <NavText  to="/pessoa-usuaria">
                Pessoa Usuária
            </NavText>
             <NavText to="/profissional" >Profissional</NavText>
        </FooterNavBar>
        <SocialMediaNav>                
        <SocialMediaIcon href='https://www.instagram.com/lacrei.saude/' target='_banck'>
            <BsInstagram color='var(--color-primary)' />
        </SocialMediaIcon>
        <SocialMediaIcon href='https://www.facebook.com/lacrei.saude' target='_blank'>
            <CiFacebook color='var(--color-primary)' />
        </SocialMediaIcon>
        <SocialMediaIcon href='https://www.linkedin.com/company/lacrei-saude/' target='_blank'>
            <AiOutlineLinkedin  color='var(--color-primary)' />
        </SocialMediaIcon>            
        </SocialMediaNav>
        <ReferenceFooter>
            <TextFooter>
                Desafio Front-end Lacrei
            </TextFooter>
        </ReferenceFooter>
       </Container>            
    )  
}

export default Footer;