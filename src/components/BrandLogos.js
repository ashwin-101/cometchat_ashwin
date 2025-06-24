import React from "react";
import styled, { keyframes } from "styled-components";

const BrandSection = styled.section`
  background: #18122b;
  padding: 2.5rem 0;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid #28223a;
  margin: 0;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LogoSlider = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;
`;

const LogoTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Logo = styled.div`
  width: 120px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background: transparent;
  img {
    max-width: 100px;
    max-height: 32px;
    width: auto;
    height: auto;
    object-fit: contain;
    background: transparent;
    filter: none;
  }
`;

export default function BrandLogos() {
  const brandLogos = [
    { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "Twilio", url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
    { name: "MongoDB", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Intel", url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" }
  ];

  // Duplicate the logos for seamless infinite scroll
  const allLogos = [...brandLogos, ...brandLogos];

  return (
    <>
      <Divider />
      <BrandSection>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <LogoSlider>
            <LogoTrack>
              {allLogos.map((logo, index) => (
                <Logo key={`${logo.name}-${index}`}>
                  <img src={logo.url} alt={logo.name} />
                </Logo>
              ))}
            </LogoTrack>
          </LogoSlider>
        </div>
      </BrandSection>
    </>
  );
} 