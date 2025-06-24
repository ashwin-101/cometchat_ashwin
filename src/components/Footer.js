import React, { useState } from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background: #120d1c;
  color: #bdbdbd;
  padding: 3.5rem 0 0 0;
  margin-top: 3rem;
`;

const Logo = styled.div`
  font-size: 2.1rem;
  font-weight: 400;
  letter-spacing: -1px;
  color: #fff;
  font-family: 'Satoshi Variable', 'Inter', 'Montserrat', Arial, sans-serif;
  margin-bottom: 2.2rem;
  span {
    font-weight: 700;
    color: #fff;
  }
  @media (max-width: 600px) {
    margin-left: 1.2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.5rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: 600px) {
    display: block;
    padding: 0 1.2rem;
    margin: 0;
    gap: 0;
  }
`;

const AccordionSection = styled.div`
  @media (max-width: 600px) {
    border-bottom: 1px solid #231a2f;
    margin-bottom: 0.2rem;
  }
`;

const AccordionTitle = styled.div`
  color: #7b5cff;
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 0;
  cursor: pointer;
  @media (min-width: 601px) {
    cursor: default;
    padding: 0;
    margin-bottom: 1.1rem;
  }
`;

const AccordionIcon = styled.span`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  transition: transform 0.2s;
  @media (min-width: 601px) {
    display: none;
  }
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
`;

const AccordionContent = styled.div`
  @media (max-width: 600px) {
    max-height: ${({ open }) => (open ? "1000px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1);
    padding-bottom: ${({ open }) => (open ? "1rem" : "0")};
  }
`;

const Subtitle = styled.div`
  color: #bdbdbd;
  font-size: 1.01rem;
  font-weight: 500;
  opacity: 0.6;
  margin: 1.1rem 0 0.3rem 0;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
  opacity: 0.95;
  cursor: pointer;
  color: #fff;
  font-weight: 400;
  transition: color 0.2s, opacity 0.2s;
  &:hover {
    opacity: 1;
    color: #7b5cff;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #28223a;
  margin: 2.5rem 0 0 0;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 0 1.2rem 0;
  color: #bdbdbd;
  font-size: 1.01rem;
  opacity: 0.8;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
    gap: 0.7rem;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  a {
    color: #fff;
    opacity: 0.85;
    display: flex;
    align-items: center;
    font-size: 1.01rem;
    text-decoration: none;
    transition: opacity 0.2s, color 0.2s;
    &:hover {
      opacity: 1;
      color: #7b5cff;
    }
    svg {
      margin-right: 0.4em;
      vertical-align: middle;
    }
  }
  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 0.7rem;
  }
`;

const CopyrightLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
  a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: #7b5cff;
    }
  }
  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const sections = [
  {
    title: "Platform",
    content: (
      <>
        <Subtitle>Features</Subtitle>
        <Item>Chat & Messaging</Item>
        <Item>Voice & Video Calls</Item>
        <Item>Security & Compliance</Item>
        <Item>Extensions</Item>
        <Item>Features at a glance</Item>
        <Item>Webhooks & Bots</Item>
        <Item>Moderation</Item>
        <Item>Analytics & Insights</Item>
        <Subtitle>Implementation</Subtitle>
        <Item>Widgets</Item>
        <Item>UI Kits</Item>
        <Item>SDKs & APIs</Item>
        <Subtitle>Technologies</Subtitle>
        <Item>React Chat SDK & API</Item>
        <Item>Angular Chat SDK & API</Item>
        <Item>Vue Chat SDK & API</Item>
        <Item>IOS Swift Chat SDK & API</Item>
        <Item>Android Kotlin Chat SDK & API</Item>
        <Item>Android Java Chat SDK & API</Item>
        <Item>React Native Chat SDK & API</Item>
        <Item>Ionic/Capacitor Chat SDK & API</Item>
      </>
    ),
  },
  {
    title: "Solutions",
    content: (
      <>
        <Subtitle>By Use cases</Subtitle>
        <Item>Social Community</Item>
        <Item>Marketplace</Item>
        <Item>Healthcare</Item>
        <Item>Education</Item>
        <Item>Virtual Events</Item>
        <Item>On-Demand Service</Item>
        <Item>Dating Apps</Item>
        <Item>Gaming</Item>
        <Subtitle>By Organization Type</Subtitle>
        <Item>Enterprise</Item>
        <Item>Startups</Item>
      </>
    ),
  },
  {
    title: "Developers",
    content: (
      <>
        <Subtitle>Technologies documentation</Subtitle>
        <Item>React</Item>
        <Item>Angular</Item>
        <Item>Vue</Item>
        <Item>IOS Swift</Item>
        <Item>Android Kotlin</Item>
        <Item>Android Java</Item>
        <Item>React Native</Item>
        <Item>Ionic/Capacitor</Item>
        <Subtitle>Documentation</Subtitle>
        <Item>Documentation</Item>
        <Item>Product updates</Item>
        <Item>Tutorials</Item>
        <Item>Open-source Apps</Item>
        <Item>Product status</Item>
        <Item>Glossary</Item>
      </>
    ),
  },
  {
    title: "Resources",
    content: (
      <>
        <Item>Customer stories</Item>
        <Item>Blog</Item>
        <Item>Give feedback</Item>
        <Item>Community forum</Item>
        <Item>Help center</Item>
        <Item>Partners</Item>
      </>
    ),
  },
  {
    title: "Competitors",
    content: (
      <>
        <Item>SendBird</Item>
        <Item>GetStream</Item>
        <Item>Applozic</Item>
        <Item>Twilio</Item>
        <Item>PubNub</Item>
      </>
    ),
  },
  {
    title: "Company",
    content: (
      <>
        <Item>About us</Item>
        <Item>Careers</Item>
        <Item>Partners</Item>
        <Item>Pricing</Item>
        <Item>Chat with us</Item>
      </>
    ),
  },
];

export default function Footer() {
  const [open, setOpen] = useState(Array(sections.length).fill(false));

  const handleAccordion = idx => {
    setOpen(open =>
      open.map((v, i) => (i === idx ? !v : false))
    );
  };

  return (
    <FooterSection>
      <Logo>comet<span>chat</span></Logo>
      <Grid>
        {sections.map((section, idx) => (
          <AccordionSection key={section.title}>
            <AccordionTitle onClick={() => window.innerWidth <= 600 && handleAccordion(idx)}>
              {section.title}
              <AccordionIcon open={open[idx]}>+</AccordionIcon>
            </AccordionTitle>
            <AccordionContent open={open[idx] || window.innerWidth > 600}>
              {section.content}
            </AccordionContent>
          </AccordionSection>
        ))}
      </Grid>
      <Divider />
      <BottomBar>
        <CopyrightLinks>
          <span>2023 © CometChat</span>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </CopyrightLinks>
        <Socials>
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M13.5 10.5h2.5V8h-2.5V6.5c0-.7.2-1 .9-1H16V3.1C15.7 3 15 3 14.2 3c-2 0-2.7 1-2.7 2.7V8H9v2.5h2.5V17h2.5v-6.5z"/></svg>
            Facebook
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M5.5 7.5A1.5 1.5 0 1 1 5.5 4a1.5 1.5 0 0 1 0 3zm-2 1h3v8h-3v-8zm5 0h2.8v1.1h.04c.39-.74 1.34-1.51 2.76-1.51 2.95 0 3.5 1.94 3.5 4.47V17h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.09-1.6 2.22V17h-3v-8z"/></svg>
            LinkedIn
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" rx="5" fill="#fff" fillOpacity="0.1"/><path fill="#fff" d="M10 6.5A3.5 3.5 0 1 0 10 13.5A3.5 3.5 0 1 0 10 6.5ZM16 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
            Instagram
          </a>
          <a href="#" aria-label="Twitter">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M17 6.1c-.5.2-1 .4-1.5.5.5-.3.9-.8 1.1-1.3-.5.3-1 .5-1.6.7-.5-.5-1.2-.8-2-.8-1.5 0-2.7 1.2-2.7 2.7 0 .2 0 .4.1.6-2.2-.1-4.1-1.2-5.4-2.9-.2.4-.3.8-.3 1.2 0 .9.5 1.7 1.2 2.2-.4 0-.8-.1-1.1-.3v.1c0 1.3.9 2.3 2.1 2.6-.2.1-.4.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.3 1.8 2.4 1.8-1 .8-2.2 1.3-3.5 1.3-.2 0-.4 0-.6-.1 1.2.8 2.6 1.3 4.1 1.3 4.9 0 7.6-4 7.6-7.6v-.3c.5-.4.9-.8 1.2-1.3z"/></svg>
            Twitter
          </a>
          <a href="#" aria-label="GitHub">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M10 2C5.6 2 2 5.6 2 10c0 3.5 2.3 6.4 5.5 7.4.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.3.9.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.6-1.1 2.3-.9 2.3-.9.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.5.7.5 1.4v2c0 .2.1.5.5.4C15.7 16.4 18 13.5 18 10c0-4.4-3.6-8-8-8z"/></svg>
            GitHub
          </a>
        </Socials>
      </BottomBar>
    </FooterSection>
  );
} 