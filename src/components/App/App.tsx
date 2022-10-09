import React, {useEffect, useState} from 'react';
import Header from "Components/Header/Header"
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "Pages/Home/Home";
import Settings from "Pages/Settings/Settings";
import {useSelector} from "react-redux";
import Theme from "Components/Theme/Theme"
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary"
import styled from "styled-components";
import "./App.css"
const App = () => {
    const theme = useSelector<any>(state => state.theme)
    // @ts-ignore
    return (
        <div className={theme ? "lightTheme" : "darkTheme"}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
