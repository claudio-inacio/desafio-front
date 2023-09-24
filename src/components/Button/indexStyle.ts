import styled from "styled-components";

interface Props{
     buttonfilled?: string;
}

export const Container = styled.button<Props>`     
     width: 192px;
     height: 48px;     
     color: ${props => props.buttonfilled ? '#FFFFFF' : 'var(--color-primary)'};
     background-color: ${props => props.buttonfilled ? 'var(--color-primary)' : '#FFFFFF' };
     font-size: 18px;
     font-weight: bold;
     border-radius: 8px;
     border: 2px solid var(--color-primary);
     box-shadow: 0px 4px 7px  gray;
`;