"use client";

import Flex from "@/lib/atoms/Flex";
import React from "react";
import styled from "styled-components";
import ArrowRight from "./svg/ArrowRight";
import MenuIcon from "./svg/MenuIcon";
import HeaderBrandLogo from "./svg/HeaderBrandLogo";

const MENU_ITEMS = [
  {
    name: "Solutions",
    submenu: [
      "Retail",
      "Enterprise",
      "Healthcare",
      "ISP Cable",
      "OEM",
      "Consulting",
    ],
  },
  {
    name: "Partners",
  },
  { name: "About us" },
  { name: "Connect" },
];

export default function Navbar() {
  return (
    <Main
      flex-direction="column"
      $justifycontent="space-between"
      $alignitems="center"
    >
      <Container $justifycontent="space-between" $alignitems="center">
        <SubContainer $alignitems="center">
          <HeaderBrandLogo />
          <MenuContainer>
            {MENU_ITEMS?.map((item) => (
              <MenuItemWrapper key={item.name} tabIndex={0}>
                <MenuItem $alignitems="center">
                  {item.name}
                  {item.submenu && (
                    <MenuWrapper>
                      <MenuIcon />
                    </MenuWrapper>
                  )}
                </MenuItem>
                {item.submenu && (
                  <Submenu $direction="column">
                    <SubmenuFrame>
                      <MenuFrame>
                        {item.submenu.map((sub) => (
                          <SubmenuItemWrapper key={sub}>
                            <SubMenuItem>{sub}</SubMenuItem>
                          </SubmenuItemWrapper>
                        ))}
                      </MenuFrame>
                      <IconmenuFrame></IconmenuFrame>
                    </SubmenuFrame>
                  </Submenu>
                )}
              </MenuItemWrapper>
            ))}
          </MenuContainer>
        </SubContainer>
        <ActionButtons $justifycontent="space-between" $alignitems="center">
          <LoginButton>LOGIN</LoginButton>
          <StartButton>
            GET STARTED
            <ArrowWrapper>
              <ArrowRight />
            </ArrowWrapper>
          </StartButton>
        </ActionButtons>
      </Container>
    </Main>
  );
}

const Main = styled(Flex)`
  padding: 8.5px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: transparent;
`;

const Container = styled(Flex)`
  width: 100%;
  padding: 8px;
  background-color: white;
  box-sizing: border-box;
`;

const SubContainer = styled(Flex)`
  gap: 48px;
`;

const MenuContainer = styled(Flex)`
  gap: 32px;
`;

const MenuItem = styled(Flex)`
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  /* &:hover {
    font-weight: 600;
  } */
`;

const ActionButtons = styled(Flex)`
  gap: 8px;
`;

const MenuWrapper = styled(Flex)`
  align-items: "center";
`;

const LoginButton = styled.button`
  background-color: transparent;
  padding: 12px 24px;
  border: 0.5px solid var(--500, #1a1919);
  cursor: pointer;
`;

const StartButton = styled.button`
  background-color: #f7c923;
  border: none;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 400;
  cursor: pointer;
`;

const ArrowWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const MenuItemWrapper = styled(Flex)`
  position: relative;
  flex-direction: column;

  /* how long it should wait before hiding after mouse leaves / blur */
  --hide-delay: 300ms;

  /* When hovered or focused anywhere inside, remove hide delay */
  &:hover,
  &:focus-within {
    --hide-delay: 0s;
  }
`;

const Submenu = styled(Flex)`
  position: absolute;
  top: 43px;
  left: 0;
  padding: 8px 8px 8px 0;
  background-color: #fff;

  /* Start hidden but keep it in layout flow for smoother transitions */
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(4px);

  /* Fade + slide; visibility toggles after a delay so it doesn't blink */
  transition: opacity 150ms ease, transform 150ms ease,
    visibility 0s linear var(--hide-delay);

  /* OPEN STATES: when the wrapper is hovered OR anything inside is focused */
  ${MenuItemWrapper}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
    /* show immediately (no delay on the way in) */
    transition-delay: 0s, 0s, 0s;
  }
`;

const SubmenuFrame = styled(Flex)`
  width: 362px;
  /* background: #b09999ff; */
  align-items: stretch;
`;

const MenuFrame = styled(Flex)`
  padding: 0 8px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const IconmenuFrame = styled(Flex)`
  width: 133px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f2;
`;

const SubmenuItemWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 0.5px dashed var(--40, rgba(26, 25, 25, 0.4));

  &:last-child {
    border-bottom: none;
  }

  /* &:hover {
    background: #f7f7f7;
  } */
`;

const SubMenuItem = styled.div`
  width: 100%;
  color: var(--500, #1a1919);
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
