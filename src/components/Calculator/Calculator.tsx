import React from 'react';
import Display from "Components/Display/Display";
import {useSelector} from "react-redux";
import styled from "styled-components";
import History from "Components/History/History";
import ControlPanel from "Components/ControlPanel/ControlPanel"
import "./Calculator.css"
const HistoryContainer = styled.div`

`

const Calculator = () => {
    const history: any = useSelector<any>(state => state.operations)
        const numbers = [
            {id: 1, value: '1', type: 'number'},
            {id: 2, value: '2', type: 'number'},
            {id: 3, value: '3', type: 'number'},
            {id: 4, value: '4', type: 'number'},
            {id: 5, value: '5', type: 'number'},
            {id: 6, value: '6', type: 'number'},
            {id: 7, value: '7', type: 'number'},
            {id: 8, value: '8', type: 'number'},
            {id: 9, value: '9', type: 'number'},
            {id: 10, value: '0', type: 'number'},
            {id: 17, value: '.', type: 'number'},
        ]
        const operations = [
            {id: 0, value: 'C', type: 'operation'},
            {id: 18, value: 'CE', type: 'operation'},
            {id: 16, value: '=', type: 'operation'},
        ]
        const operators = [
            {id: 11, value: '+', type: 'operator'},
            {id: 12, value: '-', type: 'operator'},
            {id: 13, value: '*', type: 'operator'},
            {id: 14, value: '/', type: 'operator'},
            {id: 15, value: '%', type: 'operator'},
        ]
        return (
            <>
            <div className={"history"}>
            <HistoryContainer>
                <ControlPanel/>
                <History operations={history}/>
            </HistoryContainer>
            </div>
                <Display numbers={numbers} operators={operators} operations={operations}/>
            </>
        );
    }
;

export default Calculator;