import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2vw 1.1rem 2vw;
  background: transparent;
  width: 100vw;
  left: 0;
  right: 0;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1.1rem 1.2rem 1.1rem 1.2rem;
  }
`;

const Logo = styled.div`
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 2.2rem;
  letter-spacing: -1px;
  color: #fff;
  user-select: none;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const LogoChat = styled.span`
  font-weight: 800;
  margin-left: 2px;
  letter-spacing: 0px;
  color: #fff;
`;

const Menu = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.08rem;

  @media (max-width: 800px) {
    gap: 1rem;
    font-size: 0.95rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  color: #fff;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s;
  font-weight: 400;
  &:hover {
    opacity: 1;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #a084ff 0%, #7b5cff 60%, #a084ff 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.7rem 1.6rem;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.08rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(123, 92, 255, 0.18);
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
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
  &:hover {
    background: linear-gradient(90deg, #7b5cff 0%, #a084ff 100%);
    transform: translateY(-2px) scale(1.04);
  }
  span {
    position: relative;
    z-index: 2;
    font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
    font-weight: 500;
    font-size: 1.08rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Link = styled.a`
  color: #fff;
  opacity: 0.7;
  margin-right: 0.2rem;
  text-decoration: none;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.08rem;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    opacity: 1;
    margin-right: 0;
  }
`;

// Optional: Theme toggle icon for mobile (placeholder)
const ThemeToggle = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    color: #fff;
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
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

  @media (max-width: 600px) {
    top: -180px;
    left: -240px;
    width: 350px;
    opacity: 0.5;
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo>
        comet<LogoChat>chat</LogoChat>
      </Logo>
      <Menu>
        <MenuItem>Platform</MenuItem>
        <MenuItem>Solutions</MenuItem>
        <MenuItem>Developers</MenuItem>
        <MenuItem>Resources</MenuItem>
        <MenuItem>Pricing</MenuItem>
      </Menu>
      <Actions>
        <Link href="#">Log in</Link>
        <ThemeToggle>
          <span role="img" aria-label="theme">🌙</span>
        </ThemeToggle>
        <Button><span>Schedule a demo</span></Button>
      </Actions>
    </Nav>
  );
} 