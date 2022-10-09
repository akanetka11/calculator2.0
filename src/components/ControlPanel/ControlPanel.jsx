import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

const HistoryTitle = styled.p`
font-size: 24px;
margin-bottom: 20px;
`

const ControlPanel = () => {
    const dispatch = useDispatch()
    const isHistory = useSelector(state => state.isHistory)
    return (
        <div>
            <HistoryTitle onClick={() => dispatch({type: 'SHOW_HISTORY_ACTION', payload: !isHistory})}>{isHistory ? "hide " : "show "}history</HistoryTitle>
        </div>
    );
};

export default ControlPanel;