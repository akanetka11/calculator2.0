import React from 'react';
import Theme from "Components/Theme/Theme";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary"

const ThemeButton = styled.div`
font-size: 26px;
&:hover {
cursor: pointer;
}
`
const Settings = () => {
    const theme = useSelector<any>(state => state.theme)
    const dispatch = useDispatch()
    return (
        <ErrorBoundary>
        <div style={{display: "flex", justifyContent: "center"}}>
            <ThemeButton onClick={() => dispatch({type: "CHANGE_THEME_ACTION", payload: !theme})}>set {theme ? "dark" : "light"} theme</ThemeButton>
        </div>
        </ErrorBoundary>
    );
};

export default Settings;