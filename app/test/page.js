"use client";

import React from "react";
import styled from "styled-components";

const StackingCards = () => {
  const cards = [
    {
      id: 1,
      title: "Mountain Adventure",
      description:
        "Explore the breathtaking peaks and valleys of nature's wonders.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Explore More",
    },
    {
      id: 2,
      title: "Ocean Paradise",
      description:
        "Discover the hidden treasures beneath the crystal clear waters.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Dive In",
    },
    {
      id: 3,
      title: "Forest Retreat",
      description:
        "Immerse yourself in the serene beauty of ancient woodlands.",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Discover",
    },
  ];

  const SERVICE_FEATURES = [
    {
      id: "1/4",
      title: "Flexible Program Design",
      description:
        "Modular extended service plans tailored by product category, sales channel, and lifecycle stage / Support for power tools, consumer electronics, smart devices, home tech, appliances, and more",
      bgColor: "var(--200, #f2f2f2)",
      icon: "/assets/services-icon-1.svg",
    },
    {
      id: "2/4",
      title: "Revenue-Sharing Business Models",
      description:
        "Drive margin with reserve participation, renewal campaigns, and upsell opportunities / Analytics dashboards that show plan performance and profit potential",

      bgColor: "var(--100, #FFF)",
      icon: "/assets/services-icon-2.svg",
    },
    {
      id: "3/4",
      title: "End-to-End Service Procedures & Fulfillment",
      description:
        "We manage claims, customer support, repairs, and logistics under your brand / Reduce overhead while improving NPS and response time",
      bgColor: "var(--200, #f2f2f2)",
      icon: "/assets/services-icon-3.svg",
    },
    {
      id: "4/4",
      title: "Embedded Digital Experiences",
      description:
        "Add warranty offers to checkout, portals, or mobile apps / Our APIs and no-code modules simplify integration into any digital ecosystem",
      bgColor: "var(--100, #FFF)",
      icon: "/assets/services-icon-4.svg",
    },
  ];

  return (
    <Main>
      <HeaderContainer>
        <TextComponent>
          <Title>Amazing Destinations</Title>
          <Subtitle>👇 Scroll to see the magic unfold</Subtitle>
          <PrimaryButton href="#">Get Started</PrimaryButton>
        </TextComponent>
      </HeaderContainer>

      <CardsContainer>
        <StackCards>
          {cards.map((card, index) => (
            <CardItem key={card.id} index={index}>
              <CardGrid>
                <TextColumn>
                  <TextContent>
                    <CardNumber>0{card.id}</CardNumber>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                    <AccentButton href="#">{card.buttonText}</AccentButton>
                  </TextContent>
                </TextColumn>
                <ImageColumn>
                  <CardImage src={card.image} alt={card.title} />
                </ImageColumn>
              </CardGrid>
            </CardItem>
          ))}
        </StackCards>
      </CardsContainer>

      <ContentContainer>
        <ContentText>
          <p>
            Welcome to our collection of stunning destinations. Each location
            offers unique experiences and unforgettable memories. From towering
            mountains to serene beaches, we've curated the most beautiful places
            on earth for your next adventure.
          </p>
          <p>
            Our team has personally visited each destination to ensure we
            provide you with the most authentic and valuable information.
            Whether you're an avid explorer or planning your first trip, we've
            got something special for everyone.
          </p>
        </ContentText>
      </ContentContainer>
    </Main>
  );
};

// Styled Components
const Main = styled.main`
  padding: 4rem 0;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  color: #ffffff;
`;

const HeaderContainer = styled.div`
  max-width: 500px;
  margin: 0 auto 3rem;
  padding: 0 1.5rem;
  text-align: center;
`;

const CardsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem;
  padding: 0 1.5rem;
`;

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const TextComponent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #a8e6cf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a8e6cf;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;

const StackCards = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const CardItem = styled.li`
  position: sticky;
  top: ${({ index }) => `${index * 10}rem`};
  height: 0;
  padding-bottom: 50%;
  transform-origin: center top;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextColumn = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 2rem;
`;

const ImageColumn = styled.div`
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextContent = styled.div`
  width: 100%;
`;

const CardNumber = styled.div`
  font-size: 1rem;
  color: #a8e6cf;
  font-weight: 600;
  margin-bottom: 0.5rem;
  opacity: 0.8;
`;

const CardTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const AccentButton = styled.a`
  display: inline-block;
  background: linear-gradient(45deg, #a8e6cf, #56ab91);
  color: #0c0c0c;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(168, 230, 207, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(168, 230, 207, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardItem}:hover & {
    transform: scale(1.05);
  }
`;

const ContentText = styled.div`
  line-height: 1.8;
  text-align: center;

  p {
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
  }
`;

export default StackingCards;
