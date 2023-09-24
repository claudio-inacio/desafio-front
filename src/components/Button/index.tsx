
import React from 'react';
import { ButtonProps } from '../../interfaces/button';
import {Container} from './indexStyle';


const Button = ({buttonfilled, children, onClick}: ButtonProps) => {
    return(
       <Container buttonfilled={buttonfilled} onClick={onClick}>
            {children}
       </Container> 
    )  
}

export default Button;