import React from 'react';
import {Container, NavBar, NavItem, NavText, Tittle} from './indexStyle';


const Header = () => {
    return(
       <Container>
        <Tittle>Lacrei</Tittle>
        <NavBar>
            
                <NavItem>
                    <NavText selected={true}>Home</NavText>
                </NavItem>
                <NavItem>
                    <NavText selected={false}>
                        Pessoa Usúaria
                    </NavText>
                </NavItem>
                <NavItem>
                    <NavText selected={false}>Profissional</NavText>
                </NavItem>
            
        </NavBar>
       </Container>            
    )  
}

export default Header;