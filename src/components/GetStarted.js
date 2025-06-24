import React from "react";
import styled from "styled-components";
import BlurHeavy from "../assets/Blur Layer - Heavy.png";
import Group1 from "../assets/Group 1.png";

const Section = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 480px;
  background: radial-gradient(ellipse at 50% 40%, #2d2346 60%, #18122b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-bottom: 2.5rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1.2rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  font-size: 1.15rem;
  font-weight: 600;
  padding: 1.1rem 2.2rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px 0 rgba(123, 92, 255, 0.10);
  background: #23203a;
  color: #fff;
  &:nth-child(2) {
    background: linear-gradient(90deg, #a084ff 0%, #7b5cff 60%, #a084ff 100%);
    color: #fff;
  }
  &:hover {
    filter: brightness(1.08);
    box-shadow: 0 4px 24px 0 rgba(123, 92, 255, 0.18);
  }
`;

const PlanetLeft = styled.img`
  position: absolute;
  top: -120px;
  left: -180px;
  width: 520px;
  z-index: 1;
  transform: rotate(180deg);
  pointer-events: none;
  user-select: none;
`;

const PlanetRight = styled.img`
  position: absolute;
  bottom: 32px;
  right: 2px;
  width: 120px;
  z-index: 2;
  pointer-events: none;
  user-select: none;
  transform: scaleX(-1);
`;

const OrbitLine = styled.svg`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100vw;
  height: 320px;
  z-index: 2;
  pointer-events: none;
  @media (max-width: 900px) {
    width: 100vw;
    left: 0;
    height: 120px;
    top: 80px;
  }
`;

// Star dot planets
const StarDot = styled.img`
  position: absolute;
  width: ${props => props.size || 5}px;
  height: ${props => props.size || 5}px;
  filter: ${props => {
    if (props.hue === 'orange') return 'drop-shadow(0 0 6px #ffb86c) drop-shadow(0 0 10px #ffb86c)';
    if (props.hue === 'purple') return 'drop-shadow(0 0 6px #a084ff) drop-shadow(0 0 10px #7b5cff)';
    return 'drop-shadow(0 0 6px #fff) drop-shadow(0 0 10px #fff)';
  }};
  opacity: 0.8;
  pointer-events: none;
  user-select: none;
  z-index: 4;
`;

export default function GetStarted() {
  return (
    <Section>
      <OrbitLine viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200 Q 960 0 1920 120" stroke="#fff" strokeOpacity="0.18" strokeWidth="1" fill="none" />
      </OrbitLine>
      <PlanetLeft src={BlurHeavy} alt="planet left" />
      <PlanetRight src={Group1} alt="planet right" />
      {/* Star dots - smaller, more, different hues, scattered far apart */}
      <StarDot src={BlurHeavy} size={4} hue="white" style={{top: '30px', left: '8vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="purple" style={{top: '80px', left: '22vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="orange" style={{top: '160px', left: '15vw'}} />
      <StarDot src={BlurHeavy} size={6} hue="white" style={{top: '220px', left: '38vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="purple" style={{top: '320px', left: '5vw'}} />
      <StarDot src={BlurHeavy} size={4} hue="orange" style={{top: '100px', left: '60vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="white" style={{top: '60px', left: '80vw'}} />
      <StarDot src={BlurHeavy} size={4} hue="purple" style={{top: '200px', left: '55vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="orange" style={{top: '300px', left: '70vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="white" style={{top: '180px', left: '95vw'}} />
      <StarDot src={BlurHeavy} size={4} hue="orange" style={{top: '400px', left: '45vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="purple" style={{top: '350px', left: '85vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="white" style={{top: '420px', left: '15vw'}} />
      <StarDot src={BlurHeavy} size={4} hue="purple" style={{top: '380px', left: '60vw'}} />
      <Content>
        <Title>Get started for free</Title>
        <Subtitle>Build and test for as long as you need.<br/>Pick a plan when you're ready.</Subtitle>
        <ButtonRow>
          <Button>Start free trial</Button>
          <Button>Schedule a demo</Button>
        </ButtonRow>
      </Content>
    </Section>
  );
} 