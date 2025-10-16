"use client";

import styled, { css } from "styled-components";

export const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  border-radius: 4px;

  ${({ black }) =>
    black
      ? css`
          color: #fff;
        `
      : css`
          color: #000;
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--12, rgba(85, 86, 89, 0.12));
      cursor: not-allowed;
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed currentColor;
    opacity: 0.4;
    pointer-events: none;
  }

  svg {
    color: inherit;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  &:focus-within svg {
    color: white;
  }

  ${({ iconPosition }) =>
    iconPosition === "left" &&
    css`
      gap: 8px;
      svg {
        margin-bottom: 2px;
      }
    `}

  ${({ iconPosition }) =>
    iconPosition === "right" &&
    css`
      justify-content: space-between;
      svg {
        margin-bottom: 2px;
      }
    `}

  ${({ iconPosition }) =>
    iconPosition === "both" &&
    css`
      justify-content: space-between;
      gap: 8px;
      svg {
        margin-bottom: 2px;
      }
    `}
`;

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  background: transparent;
  font-size: 14px;
  font-weight: 400;
  color: inherit;
  border: none;
  outline: none;
  position: relative;
  z-index: 1;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    opacity: 0.6;
  }

  &:focus::placeholder {
    opacity: 0.3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
