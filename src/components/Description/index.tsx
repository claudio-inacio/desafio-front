import React from 'react';
import {Container,  Message,  MessageContainer,  Tittle} from './indexStyle';
import { DescriptionProps } from '../../interfaces/description';



const DescriptionComponent = ({lateralBar, tittle, message}: DescriptionProps) => {
    return(
       <Container>
        <Tittle >{tittle}</Tittle>
       <MessageContainer>
        <Message>
            {message}
        </Message>
       </MessageContainer>
       </Container>            
    )  
}

export default DescriptionComponent;