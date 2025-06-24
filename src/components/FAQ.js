import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Section = styled.section`
  margin: 3rem 0 2rem 0;
  text-align: center;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
`;

const FaqLabel = styled.div`
  color: #ff914d;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #18122b;
`;

const FAQList = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

const Question = styled.div`
  background: #f7f6fa;
  border-radius: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 1rem 1.2rem;
  color: #18122b;
  font-weight: 500;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.06);
  transition: background 0.2s;
  display: flex;
  flex-direction: column;
  &:hover {
    background: #ece9f6;
  }
`;

const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.3s;
  margin-left: 1rem;
  svg {
    width: 22px;
    height: 22px;
    stroke: #18122b;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    transition: transform 0.3s;
  }
  &.open svg {
    transform: rotate(180deg);
  }
`;

const Answer = styled(motion.div)`
  background: #f2f0f8;
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.2rem;
  color: #3a3456;
  font-size: 1rem;
`;

const AnswerInner = styled(motion.div)`
  background: #f2f0f8;
  border-radius: 0 0 10px 10px;
  margin: 0 -1.2rem -1rem -1.2rem;
  padding: 1rem 1.2rem 1rem 1.2rem;
  color: #3a3456;
  font-size: 1rem;
`;

const faqs = [
  {
    q: "This is a frequently asked question?",
    a: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio malesuada cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    q: "This is a frequently asked question?",
    a: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio malesuada cursus leo dui.",
  },
  {
    q: "This is a very long frequently asked question about our services with more than one line?",
    a: "Yes, we support multiline questions and answers. You can add as much content as you need here.",
  },
  {
    q: "This is a frequently asked question?",
    a: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    q: "This is a question?",
    a: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    q: "This is a question?",
    a: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <Section>
      <FaqLabel>FAQ's</FaqLabel>
      <Title>We want to help you with all your doubts</Title>
      <FAQList>
        {faqs.map((faq, i) => (
          <Question key={i} onClick={() => setOpen(open === i ? null : i)}>
            <QuestionRow>
              <span>{faq.q}</span>
              <Arrow className={open === i ? 'open' : ''}>
                <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              </Arrow>
            </QuestionRow>
            <AnimatePresence initial={false}>
              {open === i && (
                <AnswerInner
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.a}
                </AnswerInner>
              )}
            </AnimatePresence>
          </Question>
        ))}
      </FAQList>
    </Section>
  );
} 