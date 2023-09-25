import React from 'react';
import {Container, NavBar, NavText, Tittle} from './indexStyle';



const Header = () => {
    return(
       <Container>
        <Tittle to='/'>Lacrei</Tittle>
        <NavBar>
            <NavText to="/">
                Home
            </NavText>
            <NavText  to="/pessoa-usuaria">
                Pessoa Usuária
            </NavText>
             <NavText to="/profissional" >Profissional</NavText>
        </NavBar>
       </Container>            
    )  
}

export default Header;