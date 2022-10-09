import React from 'react';
import Header from "../../components/Header/Header";
import Calculator from "../../components/Calculator/Calculator";
import styled from "styled-components";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary"

const Container = styled.div`
width: 1200px;
margin: auto;
position: relative;
 @media (max-width: 768px) {
    width: 90%;
  }
`
const Home = () => {
    return (
        <Container>
          <ErrorBoundary>
            <Calculator/>
          </ErrorBoundary>
        </Container>
    );
};

export default Home;