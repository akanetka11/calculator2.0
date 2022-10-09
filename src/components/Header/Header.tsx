import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from 'Pages/Home/Home'
import Settings from "Pages/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components"
import "./Header.css"

const HeaderContainer = styled.div`
height: 100px;
display: flex;
align-items: center;
`
const AppContainer = styled.div`
width: 1200px;
margin: auto;
display: flex;
justify-content: space-between;
 @media (max-width: 768px) {
 width: 90%;
    flex-direction: column;
  }
`
const Title = styled.h1`
 @media (max-width: 768px) {
    font-size: 24px;
  }
`
const Navigation = styled.nav`
& ul {
display: flex;
}
& li {
list-style: none;
}
& a {
text-decoration: none;
margin-right: 40px;
font-size: 20px;
padding-bottom: 5px;
 @media (max-width: 768px) {
    margin-right: 20px;
    font-size: 18px;
  }
}
`
const Header = () => {
const [currentPage, setCurrentPage] = useState('Home')
    return (
        <HeaderContainer>
            <AppContainer>
                <Title>Calculator App</Title>
                <Navigation>
                    <ul>
                        <li>
                            <Link to={"/"} onClick={() => setCurrentPage('Home')} className={currentPage === 'Home' ? "activeLink" : ''}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/settings"} onClick={() => setCurrentPage('Settings')} className={currentPage === 'Settings' ? "activeLink" : ''}>Settings</Link>
                        </li>
                    </ul>
                </Navigation>
            </AppContainer>
        </HeaderContainer>
    );
};

export default Header;