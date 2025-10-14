"use client";

import Flex from "@/lib/atoms/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowRight from "./svg/ArrowRight";
import MenuIcon from "./svg/MenuIcon";
import CloseIcon from "./svg/CloseIcon";
import HeaderBrandLogo from "./svg/HeaderBrandLogo";
import Link from "next/link";
import MenuLine from "./svg/MenuLine";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  {
    name: "Solutions",
    submenu: [
      { name: "Retail", href: "/solutions/retail" },
      { name: "Enterprise", href: "/solutions/enterprise" },
      { name: "MVNO/MNO", href: "/solutions/mvno-mno" },
      { name: "ISP Cable", href: "/solutions/isp-msp" },
      { name: "OEM", href: "/solutions/oem" },
      { name: "Consulting", href: "/solutions/consulting" },
    ],
    href: "/solutions",
  },
  { name: "Partners", href: "/partners" },
  { name: "About us", href: "/about" },
  { name: "Connect", href: "/connect" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <Main
      flex-direction="column"
      $justifycontent="space-between"
      $alignitems="center"
      $isopen={isOpen}
    >
      <Wrapper>
        <Container $justifycontent="space-between" $alignitems="center">
          <SubContainer $alignitems="center">
            <Link href={"/"}>
              <HeaderBrandLogo />
            </Link>

            <MenuContainer>
              {MENU_ITEMS?.map((item, index) => (
                <MenuItemWrapper key={index} tabIndex={0}>
                  <Link href={item.href} passHref>
                    <MenuItem $alignitems="center">
                      {item.name}
                      {item.submenu && (
                        <MenuWrapper>
                          <MenuIcon />
                        </MenuWrapper>
                      )}
                    </MenuItem>
                  </Link>

                  {item.submenu && (
                    <Submenu $direction="column">
                      <SubmenuFrame>
                        <MenuFrame>
                          {item.submenu.map((sub) => (
                            <SubmenuItemWrapper key={sub.href}>
                              <Link href={sub.href} passHref>
                                <SubMenuItem>{sub.name}</SubMenuItem>
                              </Link>
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

          <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuLine />}
          </MobileMenuButton>
        </Container>

        <Sidebar
          $isopen={isOpen}
          $direction="column"
          $justifycontent="space-between"
          $fullwidth
        >
          <SubSideBlock $direction="column">
            <SidebarLinks>
              {MENU_ITEMS.map((item, i) => {
                const isactive =
                  pathname === item.href ||
                  item.submenu?.some((sub) => pathname === sub.href);
                return (
                  <SidebarItem key={i}>
                    <SidebarItemLink
                      href={item.href || "#"}
                      passHref
                      onClick={handleLinkClick}
                    >
                      <SidebarItemLabel
                        $alignitems="center"
                        $isactive={isactive}
                      >
                        {item.name}
                        {item.submenu && (
                          <SidebarItemIcon $alignitems="center">
                            <MenuIcon />
                          </SidebarItemIcon>
                        )}
                      </SidebarItemLabel>
                    </SidebarItemLink>

                    {item.submenu && (
                      <SidebarSubmenu>
                        {item.submenu.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <SidebarSubItem
                              key={sub.href}
                              $isactive={isSubActive}
                            >
                              <Link href={sub.href} onClick={handleLinkClick}>
                                {sub.name}
                              </Link>
                            </SidebarSubItem>
                          );
                        })}
                      </SidebarSubmenu>
                    )}
                  </SidebarItem>
                );
              })}
            </SidebarLinks>
          </SubSideBlock>

          <SidebarButtons>
            <LoginButton>LOGIN</LoginButton>
            <StartButton>
              GET STARTED
              <ArrowWrapper>
                <ArrowRight />
              </ArrowWrapper>
            </StartButton>
          </SidebarButtons>
        </Sidebar>

        {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      </Wrapper>
    </Main>
  );
}

const Main = styled(Flex)`
  padding: ${({ $isopen }) => ($isopen ? "0" : "8px")};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: transparent;
  transition: padding 0.4s ease-in-out, background-color 0.4s ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  @media (max-width: 980px) {
    display: none;
  }
`;

const MenuItem = styled(Flex)`
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;

const ActionButtons = styled(Flex)`
  gap: 8px;
  @media (max-width: 980px) {
    display: none;
  }
`;

const MenuWrapper = styled(Flex)`
  align-items: center;
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
  justify-content: center;
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
  --hide-delay: 300ms;

  &:hover {
    --hide-delay: 0s;
  }
  isolation: isolate;
  --hide-delay: 300ms;
  &:hover,
  &:focus-within {
    --hide-delay: 0s;
  }
`;

const Submenu = styled(Flex)`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 8px 8px 8px 0;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(4px);
  transition: opacity 150ms ease, transform 150ms ease,
    visibility 0s linear var(--hide-delay);

  ${MenuItemWrapper}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
    transition-delay: 0s, 0s, 0s;
  }
`;

const SubmenuFrame = styled(Flex)`
  width: 362px;
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
  border-bottom: 0.5px dashed rgba(26, 25, 25, 0.4);
  &:last-child {
    border-bottom: none;
  }
`;

const SubMenuItem = styled.div`
  width: 100%;
  color: #1a1919;
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 980px) {
    display: block;
  }
`;

const Sidebar = styled(Flex)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  background: #fff;
  z-index: 1200;
  overflow: hidden;
  flex-direction: column;

  max-height: ${({ $isopen }) => ($isopen ? "100vh" : "0")};
  opacity: ${({ $isopen }) => ($isopen ? "1" : "0")};
  transform: ${({ $isopen }) =>
    $isopen ? "translateY(0)" : "translateY(-10px)"};
  visibility: ${({ $isopen }) => ($isopen ? "visible" : "hidden")};

  transition: max-height 0.5s ease-in-out, opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out, visibility 0.4s ease-in-out;
`;

const SubSideBlock = styled(Flex)`
  gap: 24px;
  width: 100%;
`;

const SidebarHeader = styled(Flex)`
  width: 100%;
  padding: 0px 8px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SidebarItem = styled.div`
  border-bottom: 1px dashed rgba(26, 25, 25, 0.4);
`;

const SidebarItemLink = styled(Link)`
  text-decoration: none;
`;

const SidebarItemLabel = styled(Flex)`
  padding: 16px 16px;
  color: #1a1919;
  font-size: 16px;
  font-weight: ${({ $isactive }) => ($isactive ? 700 : 400)};

  cursor: pointer;
`;

const SidebarItemIcon = styled(Flex)``;

const SidebarSubmenu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  background: rgba(26, 25, 25, 0.03);
  border-top: 1px dashed rgba(26, 25, 25, 0.4);
  padding: 0;
`;

const SidebarSubItem = styled.li`
  width: 100%;
  padding: 12px 24px;
  border-bottom: 1px dashed rgba(26, 25, 25, 0.4);
  background: ${({ $isactive }) =>
    $isactive ? "rgba(26, 25, 25, 0.06)" : "transparent"};
  &:last-child {
    border-bottom: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: #1a1919;
    font-size: 14px;
    font-weight: ${({ $isactive }) => ($isactive ? 700 : 400)};
  }
`;

const SidebarButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 16px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1500;
  opacity: ${({ $isopen }) => ($isopen ? 1 : 0)};
  visibility: ${({ $isopen }) => ($isopen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
