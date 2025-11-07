"use client";

import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <DesktopFooter>
        <FooterDesktop />
      </DesktopFooter>
      <MobileFooter>
        <FooterMobile />
      </MobileFooter>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DesktopFooter = styled.div`
  display: block;

  @media (max-width: 979px) {
    display: none;
  }
`;

const MobileFooter = styled.div`
  display: none;

  @media (max-width: 979px) {
    display: block;
  }
`;
