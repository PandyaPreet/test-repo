"use client";

import styled from "styled-components";

export default function HomePage() {
  const handleButtonClick = () => {
    console.log("Clicked!");
  };
  return (
    <Container>
      <Button onClick={handleButtonClick}>Click Me</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  font-style: normal;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
