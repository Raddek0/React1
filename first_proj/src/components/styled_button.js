import React from "react";
import styled from 'styled-components';

const Button=styled.button`
    padding: 20px;
    border: 1px solid darkred;
    background-color: white;
    font-size: 16px;
    &:hover{
        background-color: darkred;
    }
`;

const StyledButton = ({onClick, label}) => {
    return(
        <Button onClick={onClick}>
            {label}
        </Button>
    );
}

export default StyledButton;