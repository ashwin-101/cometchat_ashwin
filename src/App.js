import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnerAdvantages from "./components/PartnerAdvantages";
import PartnershipTypes from "./components/PartnershipTypes";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BrandLogos from "./components/BrandLogos";
import GetStarted from "./components/GetStarted";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi Variable';
    src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }
  body {
    margin: 0;
    font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
    background: #181522;
    color: #fff;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const WhiteSectionWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #fff;
  padding: 0 0 4rem 0;
  z-index: 1;
`;

const WhiteSectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Card = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Hero />
        <BrandLogos />
        <PartnerAdvantages />
      </Main>
      <WhiteSectionWrapper>
        <WhiteSectionInner>
          <PartnershipTypes />
          <FAQ />
        </WhiteSectionInner>
      </WhiteSectionWrapper>
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
/*created with passion by Ashwin Singh Slathia*/