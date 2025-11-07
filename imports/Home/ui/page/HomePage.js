"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import PlansSection from "../components/PlansSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import ClientFooter from "@/components/ClientFooter";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import Flex from "@/lib/atoms/Flex";
import ServicePlansCard from "../components/ServicePlansCard";

const HomePage = ({ data }) => {
  return (
    <PageWrapper $fullwidth $direction="column">
      <Navbar />
      <HeroSection heroData={data?.heroSection} />
      <PlansSection plansData={data?.featureSection} />
      <ServicePlansCard serviceData={data?.solutionsSection} />
      <PartnersSection partnersData={data?.whatWeDoSection} />
      <StatsSection statsData={data?.statsSection} />
      <Wrapper>
        <CTASection ctaData={data?.ctaSection} />
        <ClientFooter />
      </Wrapper>
    </PageWrapper>
  );
};

export default HomePage;

const PageWrapper = styled(Flex)``;

const Wrapper = styled.div`
  width: 100%;
`;
