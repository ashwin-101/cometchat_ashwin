import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 0;
  padding: 64px 0 48px 0;
  background:rgb(255, 255, 255);
`;

const Label = styled.div`
  color: #6852d6;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
  color: #18122b;
  line-height: 1.05;
  letter-spacing: -0.03em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  min-width: 56px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypeTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #18122b;
  margin-bottom: 0.5rem;
`;

const TypeDesc = styled.div`
  font-size: 1.25rem;
  color: #5a5766;
  font-weight: 400;
  line-height: 1.4;
`;

const svgs = [
  // 1
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="38" rx="19" fill="#6852D6" fillOpacity="0.12"/><path fillRule="evenodd" clipRule="evenodd" d="M21.3506 11.6157C19.9961 10.4614 18.0039 10.4614 16.6494 11.6157C16.3092 11.9056 15.8862 12.0808 15.4407 12.1164C13.6667 12.258 12.258 13.6667 12.1164 15.4407C12.0808 15.8862 11.9056 16.3092 11.6157 16.6494C10.4614 18.0039 10.4614 19.9961 11.6157 21.3506C11.9056 21.6908 12.0808 22.1138 12.1164 22.5593C12.258 24.3333 13.6667 25.742 15.4407 25.8836C15.8862 25.9192 16.3092 26.0944 16.6494 26.3843C18.0039 27.5386 19.9961 27.5386 21.3506 26.3843C21.6908 26.0944 22.1138 25.9192 22.5593 25.8836C24.3333 25.742 25.742 24.3333 25.8836 22.5593C25.9192 22.1138 26.0944 21.6908 26.3843 21.3506C27.5386 19.9961 27.5386 18.0039 26.3843 16.6494C26.0944 16.3092 25.9192 15.8862 25.8836 15.4407C25.742 13.6667 24.3333 12.258 22.5593 12.1164C22.1138 12.0808 21.6908 11.9056 21.3506 11.6157ZM22.1553 17.6553C22.4482 17.3624 22.4482 16.8876 22.1553 16.5947C21.8624 16.3018 21.3876 16.3018 21.0947 16.5947L18.25 19.4393L17.2803 18.4697C16.9874 18.1768 16.5126 18.1768 16.2197 18.4697C15.9268 18.7626 15.9268 19.2374 16.2197 19.5303L17.7197 21.0303C18.0126 21.3232 18.4874 21.3232 18.7803 21.0303L22.1553 17.6553Z" fill="#6852D6"/></svg>,
  // 2
  <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.666504" width="38" height="38" rx="19" fill="#6852D6" fillOpacity="0.12"/><path fillRule="evenodd" clipRule="evenodd" d="M24.0454 11.5H15.2876C14.8922 11.5 14.5512 11.5 14.2702 11.5229C13.9737 11.5472 13.6788 11.6006 13.395 11.7452C12.9717 11.961 12.6275 12.3052 12.4117 12.7285C12.2671 13.0123 12.2137 13.3072 12.1894 13.6037C12.1665 13.8847 12.1665 14.2257 12.1665 14.6211V23.3789C12.1665 23.7743 12.1665 24.1154 12.1894 24.3963C12.2137 24.6928 12.2671 24.9877 12.4117 25.2715C12.6275 25.6948 12.9717 26.0391 13.395 26.2548C13.6788 26.3994 13.9737 26.4528 14.2702 26.4771C14.5512 26.5 14.8922 26.5 15.2876 26.5H24.0454C24.4408 26.5 24.7819 26.5 25.0628 26.4771C25.3593 26.4528 25.6542 26.3994 25.938 26.2548C26.3613 26.0391 26.7056 25.6948 26.9213 25.2715C27.0659 24.9877 27.1194 24.6928 27.1436 24.3963C27.1665 24.1153 27.1665 23.7743 27.1665 23.3789V14.6211C27.1665 14.2257 27.1665 13.8847 27.1436 13.6037C27.1194 13.3072 27.0659 13.0123 26.9213 12.7285C26.7056 12.3052 26.3613 11.961 25.938 11.7452C25.6542 11.6006 25.3593 11.5472 25.0628 11.5229C24.7819 11.5 24.4408 11.5 24.0454 11.5ZM18.6968 15.7803C18.9897 15.4874 18.9897 15.0126 18.6968 14.7197C18.4039 14.4268 17.9291 14.4268 17.6362 14.7197L15.3862 16.9697C15.0933 17.2626 15.0933 17.7374 15.3862 18.0303L17.6362 20.2803C17.9291 20.5732 18.4039 20.5732 18.6968 20.2803C18.9897 19.9874 18.9897 19.5126 18.6968 19.2197L16.9772 17.5L18.6968 15.7803ZM21.6968 17.7197C21.4039 17.4268 20.9291 17.4268 20.6362 17.7197C20.3433 18.0126 20.3433 18.4874 20.6362 18.7803L22.3558 20.5L20.6362 22.2197C20.3433 22.5126 20.3433 22.9874 20.6362 23.2803C20.9291 23.5732 21.4039 23.5732 21.6968 23.2803L23.9468 21.0303C24.2397 20.7374 24.2397 20.2626 23.9468 19.9697L21.6968 17.7197Z" fill="#6852D6"/></svg>,
  // 3
  <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.333252" width="38" height="38" rx="19" fill="#6852D6" fillOpacity="0.12"/><path d="M19.3333 11.5C19.7475 11.5 20.0833 11.8358 20.0833 12.25V13.75C20.0833 14.1642 19.7475 14.5 19.3333 14.5C18.919 14.5 18.5833 14.1642 18.5833 13.75V12.25C18.5833 11.8358 18.919 11.5 19.3333 11.5Z" fill="#6852D6"/><path d="M13.3333 24.25C13.3333 23.8358 13.669 23.5 14.0833 23.5H24.5833C24.9975 23.5 25.3333 23.8358 25.3333 24.25C25.3333 24.6642 24.9975 25 24.5833 25H14.0833C13.669 25 13.3333 24.6642 13.3333 24.25Z" fill="#6852D6"/><path d="M13.7885 13.8946C13.4956 13.6017 13.0207 13.6017 12.7278 13.8946C12.435 14.1875 12.435 14.6624 12.7278 14.9553L13.7885 16.0159C14.0814 16.3088 14.5563 16.3088 14.8492 16.0159C15.1421 15.723 15.1421 15.2481 14.8492 14.9553L13.7885 13.8946Z" fill="#6852D6"/><path d="M25.9386 13.8946C26.2315 14.1875 26.2315 14.6624 25.9386 14.9553L24.8779 16.0159C24.585 16.3088 24.1102 16.3088 23.8173 16.0159C23.5244 15.723 23.5244 15.2481 23.8173 14.9553L24.8779 13.8946C25.1708 13.6017 25.6457 13.6017 25.9386 13.8946Z" fill="#6852D6"/><path d="M14.1364 20.5C14.5003 17.9558 16.6884 16 19.3333 16C21.9781 16 24.1662 17.9558 24.5301 20.5H26.8333C27.2475 20.5 27.5833 20.8358 27.5833 21.25C27.5833 21.6642 27.2475 22 26.8333 22H11.8333C11.419 22 11.0833 21.6642 11.0833 21.25C11.0833 20.8358 11.419 20.5 11.8333 20.5H14.1364Z" fill="#6852D6"/></svg>,
];

const types = [
  {
    title: "Affiliate partner program",
    desc: "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
  },
  {
    title: "Technology partner program",
    desc: "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It's simple, safe and secure!",
  },
  {
    title: "Start up growth program",
    desc: "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
  },
];

export default function PartnershipTypes() {
  return (
    <Section>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Label>Our programs</Label>
        <Title>Types of partnerships<br />programs</Title>
        <Grid>
          {types.map((type, i) => (
            <Card key={i}>
              <IconWrap>{svgs[i]}</IconWrap>
              <TypeText>
                <TypeTitle>{type.title}</TypeTitle>
                <TypeDesc>{type.desc}</TypeDesc>
              </TypeText>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
} 