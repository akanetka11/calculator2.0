import React from 'react';
import {DisplayProps} from "./DisplayTypes";
import Keypad from "Components/Keypad/Keypad";
import styled from "styled-components";


const Display = (props: DisplayProps) => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} className={"display"}>
            <Keypad numbers={props.numbers} operations={props.operations} operators={props.operators}/>
        </div>
    );
};

export default Display;