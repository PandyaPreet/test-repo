"use client";

import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  border-radius: 4px;
  padding: 0;

  ${({ dark }) =>
    dark
      ? css`
          color: #fff;
        `
      : css`
          color: var(--500, #1a1919);
        `}

  ${({ disabled, dark }) =>
    disabled &&
    css`
      background: ${dark
        ? "var(--12, rgba(85, 86, 89, 0.12))"
        : "var(--15, rgba(85, 86, 89, 0.15))"};
      cursor: not-allowed;

      * {
        cursor: not-allowed !important;
      }
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed
      ${({ isError }) => (isError ? "var(--Error, #E30000)" : "currentColor")};
    opacity: 0.4;
    pointer-events: none;
  }

  svg {
    color: ${({ isError }) => (isError ? "var(--Error, #E30000)" : "inherit")};
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  &:focus-within svg {
    color: ${({ isError }) => (isError ? "var(--Error, #E30000)" : "white")};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background: transparent;
  font-size: 16px;
  font-weight: 400;
  color: ${({ dark, isError }) =>
    isError
      ? "var(--Error, #E30000)"
      : dark
      ? "rgba(255, 255, 255, 0.6)"
      : "var(--500, #1a1919)"};
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  padding: 13px 14px 13px 0px;
  align-items: center;
  transition: color 0.2s ease;

  &::placeholder {
    color: ${({ isError }) =>
      isError ? "var(--Error, #E30000)" : "rgba(255, 255, 255, 0.6)"};
    opacity: 0.6;
  }

  &:focus {
    color: ${({ isError, dark }) =>
      isError
        ? "var(--Error, #E30000)"
        : dark
        ? "#fff"
        : "var(--500, #1a1919)"};
  }

  &:focus::placeholder {
    opacity: 0.3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  flex-shrink: 0;
  padding: 0 4px;
  margin-bottom: 2px;
  ${({ side }) =>
    side === "left"
      ? css`
          margin-right: 8px;
        `
      : side === "right"
      ? css`
          margin-left: 8px;
        `
      : ""}
`;

export const MessageLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: ${({ isError, dark }) =>
    isError
      ? "var(--Error, #E30000)"
      : dark
      ? "rgba(255, 255, 255, 0.20)"
      : "rgba(26, 25, 25, 0.20)"};
  transition: color 0.2s ease, opacity 0.2s ease;
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
`;
