import React, {Component} from 'react';
import styled from "styled-components";
import {calculatorState} from "Store/calculator/types";
import { connect } from 'react-redux';
import ThemeProps from "./ThemeTypes";

class Theme extends Component<ThemeProps> {
    render() {
        console.log(this.props)
        const LightTheme = styled.div`
        background: #ffffff;
        height: 100vh;
        `
        const DarkTheme = styled.div`
        background: #171d3b;
        height: 100vh;
        `
        return(
            <div>
                {this.props.theme === true ? <LightTheme/> : <DarkTheme/>}
            </div>
        );
    }
}
export default Theme