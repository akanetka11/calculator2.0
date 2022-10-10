import React, {useReducer, useState} from 'react';
import {ButtonsListProps} from "./KeypadTypes";
import Button from "Components/Button/Button";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import useCount from "../../hooks/useCount/useCount"
import "./Keypad.css"

const CalculatorWrapper = styled.div`
width: 380px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
column-gap: 20px;
row-gap: 20px;
 @media (max-width: 768px) {
    width: 90%;
  }
`
const Result = styled.div`
width: 380px;
height: 45px;
border-bottom: 1px solid #adadad;
margin-bottom: 20px;
font-size: 26px;
 @media (max-width: 768px) {
    width: 90%;
  }
`
const Keypad = (props: ButtonsListProps) => {
        const dispatch = useDispatch()
        const theme = useSelector<any>(state => state.theme)
        const [currentValue, setCurrentValue] = useState('')
        const [operatorValue, setOperatorValue] = useState('')
        const [historyValue, setHistoryValue] = useState('')
        const [numbersArray, setNumbersArray] = useState<any>([])
        const [operatorsArray, setOperatorsArray] = useState<any>([])

        const KeypadEvent = {
            numberEvent(e: any) {
                if (!(e.target.textContent === '.' && currentValue[currentValue.length - 1] === '.')) {
                    setCurrentValue(currentValue + e.target.textContent)
                    setHistoryValue(`${historyValue}${e.target.textContent}`)
                }
            },
            operatorEvent(e: any) {
                if (historyValue) {
                    if (currentValue !== '' && currentValue !== '.') {
                        setNumbersArray([...numbersArray, +currentValue])
                        setOperatorsArray([...operatorsArray, e.target.textContent])
                        setHistoryValue(`${historyValue} ${e.target.textContent} `)
                        setOperatorValue(` ${e.target.textContent} `)
                        setCurrentValue('')
                    }
                }
            },
            operationEvent(e: any) {
                switch (e.target.textContent) {
                    case 'C':
                        setOperatorValue('')
                        setHistoryValue('')
                        setCurrentValue('')
                        setNumbersArray([])
                        break;
                    case 'CE':
                        console.log(historyValue.slice(historyValue.lastIndexOf(' ')))
                        setHistoryValue(historyValue.slice(0, historyValue.lastIndexOf(' ')))
                        break;
                    case '=':
                        let result = ''
                        if (numbersArray.length === 0 && operatorsArray.length === 0) {
                            setHistoryValue(historyValue)
                            dispatch({type: "SET_VALUE", payload: `${historyValue}`})
                            setCurrentValue(historyValue)
                        } else {
                            if (isNaN(historyValue.trim()[historyValue.trim().length - 1])) {
                                result = useCount([...numbersArray, +(historyValue.slice(historyValue.lastIndexOf(operatorValue.trim()) + 1))], operatorsArray.slice(0, operatorsArray.length - 1))
                                console.log(operatorsArray.slice(0, operatorsArray.length - 1))
                                dispatch({
                                    type: "SET_VALUE",
                                    payload: `${historyValue.slice(0, historyValue.length - 2)} = ${result}`
                                })
                            } else {
                                result = useCount([...numbersArray, +(historyValue.slice(historyValue.lastIndexOf(operatorValue.trim()) + 1))], operatorsArray)
                                dispatch({type: "SET_VALUE", payload: `${historyValue} = ${result}`})
                            }
                            setHistoryValue(String(result))
                            setCurrentValue(String(result))
                        }
                        setOperatorValue('')
                        setNumbersArray([])
                        setOperatorsArray([])
                }
            }
        }
        KeypadEvent.execute = function (name) {
            return KeypadEvent[name] && KeypadEvent[name].apply(KeypadEvent, [].slice.call(arguments, 1));
        };
        const numbersList = props.numbers.map(button => {
            return <li className={"button"} key={button.id} style={{listStyle: "none"}} onClick={(e) => {
                KeypadEvent.execute("numberEvent", e)
            }}>
                <Button
                    id={button.id} value={button.value} type={button.type}/></li>
        })
        const operatorsList = props.operators.map(button => {
            return <li className={"button"} key={button.id} style={{listStyle: "none"}} onClick={(e) => {
                KeypadEvent.execute("operatorEvent", e)
            }}><Button
                id={button.id} value={button.value} type={button.type}/></li>
        })
        const operationsList = props.operations.map(button => {
            return <li className={"button"} key={button.id} style={{listStyle: "none"}}
                       onClick={(e) => KeypadEvent.execute("operationEvent", e)}><Button
                id={button.id} value={button.value} type={button.type}/></li>
        })
        return (
            <>
                <Result>
                    {historyValue}
                </Result>
                <CalculatorWrapper>
                    {numbersList}
                    {operatorsList}
                    {operationsList}
                </CalculatorWrapper>
            </>
        );
    }
;

export default Keypad;