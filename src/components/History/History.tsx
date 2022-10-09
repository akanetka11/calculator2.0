import React, {useState} from 'react';
import styled from "styled-components";
import {HistoryProps} from "./HistoryTypes";
import {useDispatch, useSelector} from "react-redux";
import "./History.css"

const HistoryContainer = styled.div`
display: flex;
flex-direction: column;
`
const HistoryList = styled.ul`
& li {
list-style: none;
font-size: 20px;
margin: 10px 0;
}
`
const HistoryTitle = styled.p`
font-size: 28px;
margin-bottom: 20px;
`
const ClearHistoryButton = styled.div`
font-size: 24px;
margin-top:10px;
&:hover {
cursor: pointer;
}
`
const History = (props: HistoryProps) => {
    const dispatch  = useDispatch()
    const isHistory = useSelector<any>(state => state.isHistory)
    const operationsList = props.operations.map((operation, index) => {
        return <li key={index}>{operation}</li>
    })
        const history:any = useSelector<any>(state => state.operations)
    return (
       <HistoryContainer>
             {isHistory ?
             <>
             <HistoryList>
             {operationsList}
             </HistoryList>
             {history.length === 0 ? "history is empty:(" : <ClearHistoryButton onClick={() => dispatch({type: 'CLEAR_HISTORY', payload: ''})}>clear history</ClearHistoryButton>
 }
             </>
               : ''}


         </HistoryContainer>
    );
};

export default History;