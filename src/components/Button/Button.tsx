import React from 'react';
import {ButtonType} from "../../types/Button";
import styled from "styled-components";

const StyledButton = styled.div`
height: 70px;
border: 1px solid #adadad;
border-radius: 7px;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
background: #ececec;
&:hover {
cursor: pointer;
}
 @media (max-width: 768px) {
    height: 40px;
    font-size: 18px;
  }
`
const Button = (props: ButtonType) => {
    return (
        <StyledButton>{props.value}</StyledButton>
    );
};

export default Button;