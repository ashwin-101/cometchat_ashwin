import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BlurHeavy from "../assets/Blur Layer - Heavy.png";
import Group1 from "../assets/Group 1.png";

const HeroSection = styled.section`
  position: relative;
  min-height: 400px;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 40%, #2d2346 60%, #18122b 100%);
  border-radius: 0 0 32px 32px;
  overflow: hidden;
  padding: 2rem 0;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 400px;
    padding: 1rem 0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BgImg = styled.img`
  position: absolute;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  filter: drop-shadow(0 0 60px #a084ff) drop-shadow(0 0 120px #7b5cff);
  opacity: 1;
`;

const BlurPlanetLeft = styled(BgImg)`
  left: -260px;
  top: -180px;
  width: 600px;
`;
const BlurPlanetRight = styled(BgImg)`
  right: -220px;
  bottom: -120px;
  width: 480px;
  transform: scaleX(-1);
`;

const MidPlanet = styled(BgImg)`
  opacity: ${props => props.opacity || 0.6};
  width: ${props => props.size || 120}px;
  filter: ${props => {
    if (props.glow === 'orange') return 'drop-shadow(0 0 40px #ffb86c) brightness(1.1)';
    if (props.glow === 'purple') return 'drop-shadow(0 0 40px #a084ff) brightness(1.1)';
    if (props.glow === 'blue') return 'drop-shadow(0 0 40px #7b9fff) brightness(1.1)';
    if (props.glow === 'white') return 'drop-shadow(0 0 40px #fff) brightness(1.2)';
    return 'drop-shadow(0 0 40px #fff)';
  }};
`;

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

const Left = styled.div`
  flex: 1.2;
  padding: 0 0 0 0;
  z-index: 1;
  @media (max-width: 900px) {
    padding: 2rem 1rem 0 1rem;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  font-size: 3.1rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: #fff;
  line-height: 1.08;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  font-size: 1.35rem;
  color: #bdbdbd;
  margin-bottom: 2rem;
  font-weight: 400;
  max-width: 520px;
  @media (max-width: 600px) {
    font-size: 1.05rem;
    max-width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  padding: 2rem 2vw 2rem 0;
  @media (max-width: 900px) {
    width: 100%;
    padding: 1rem 0;
    justify-content: center;
  }
`;

const Form = styled(motion.form)`
  background: rgba(44, 36, 66, 0.65);
  border-radius: 12px;
  padding: 2.5rem 2rem 2rem 2rem;
  box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.22);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 400px;
  max-width: 440px;
  @media (max-width: 600px) {
    min-width: 90vw;
    max-width: 100vw;
    padding: 1.2rem 0.5rem;
  }
`;

const FormTitle = styled.h3`
  color: #fff;
  margin: 0 0 1.2rem 0;
  font-weight: 700;
  font-size: 2.1rem;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
`;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Input = styled.input`
  background: rgba(34, 24, 56, 0.85);
  border: 1.5px solid #3a2d5c;
  border-radius: 8px;
  padding: 1.1rem 1.2rem 1.1rem 2.8rem;
  color: #fff;
  font-size: 1.13rem;
  width: 80%;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  &::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }
  &:focus {
    outline: 2px solid #a084ff;
    border-color: #7b5cff;
  }
`;

const EmailIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #bdbdbd;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const Submit = styled.button`
  background: linear-gradient(90deg, #a084ff 0%, #7b5cff 60%, #a084ff 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1.1rem 0;
  font-weight: 700;
  font-size: 1.15rem;
  cursor: pointer;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 2px 12px 0 rgba(123, 92, 255, 0.18);
  margin-top: 0.7rem;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    left: 20%;
    top: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 100%);
    filter: blur(8px);
    opacity: 0.7;
    pointer-events: none;
    z-index: 1;
  }
  span {
    position: relative;
    z-index: 2;
    font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
  }
  &:hover {
    background: linear-gradient(90deg, #7b5cff 0%, #a084ff 100%);
    transform: translateY(-2px) scale(1.04);
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      {/* Planets and blur backgrounds */}
      <BlurPlanetLeft src={BlurHeavy} alt="planet left" />
      <BlurPlanetRight src={BlurHeavy} alt="planet right" />
      {/* Three new mid planets, all BlurHeavy, not overlapping form */}
      <MidPlanet src={BlurHeavy} size={120} style={{top: '80px', left: '32vw'}} glow="purple" opacity={0.5} />
      <MidPlanet src={BlurHeavy} size={80} style={{top: '220px', left: '22vw'}} glow="orange" opacity={0.35} />
      <MidPlanet src={BlurHeavy} size={90} style={{bottom: '-40px', left: '8vw'}} glow="white" opacity={0.32} />
      {/* Star dots - keep as before */}
      <StarDot src={BlurHeavy} size={4} hue="white" style={{top: '30px', left: '12vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="purple" style={{top: '80px', left: '25vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="orange" style={{top: '160px', left: '18vw'}} />
      <StarDot src={BlurHeavy} size={6} hue="white" style={{top: '220px', left: '35vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="purple" style={{top: '320px', left: '10vw'}} />
      <StarDot src={BlurHeavy} size={4} hue="orange" style={{top: '100px', left: '40vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="white" style={{top: '60px', left: '50vw'}} />
      <StarDot src={BlurHeavy} size={4} hue="purple" style={{top: '200px', left: '55vw'}} />
      <StarDot src={BlurHeavy} size={5} hue="orange" style={{top: '300px', left: '30vw'}} />
      <StarDot src={BlurHeavy} size={3} hue="white" style={{top: '180px', left: '45vw'}} />
      <HeroContent>
        <Left>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Join the CometChat <br /> partner universe
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
          </Subtitle>
        </Left>
        <Right>
          <Form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <FormTitle>Became a partner</FormTitle>
            <InputWrap>
              <Label htmlFor="fullname">Full name</Label>
              <Input id="fullname" placeholder="Type your name here..." />
            </InputWrap>
            <InputWrap>
              <Label htmlFor="email">Email address</Label>
              <EmailIcon>
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="4" fill="none"/><path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h10a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 15 15H5a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.75.25 5.25 4.25 5.25-4.25" stroke="#bdbdbd" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </EmailIcon>
              <Input id="email" placeholder="Type your emailsomething..." style={{ paddingLeft: '2.8rem' }} />
            </InputWrap>
            <InputWrap>
              <Label htmlFor="company">Companies name</Label>
              <Input id="company" placeholder="Type your company's name" />
            </InputWrap>
            <Submit><span>Submit application</span></Submit>
          </Form>
        </Right>
      </HeroContent>
    </HeroSection>
  );
} 