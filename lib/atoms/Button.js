"use client";

import styled, { css } from "styled-components";

const buttonVariants = {
  primary: css`
    background: var(--color-primary, #f7c923);
    border: 0.5px solid transparent;

    &:hover,
    &:focus {
      border-color: var(--color-text-dark, #1a1919);
      background: var(--color-primary, #f7c923);
    }

    &:disabled {
      background: var(--color-disabled, #b2b2b2);
      cursor: not-allowed;
    }
  `,

  secondary: css`
    background: var(--color-light, #fff);

    &:hover {
      border-bottom: 0.5px solid var(--500, #1a1919);
      background: var(--100, #fff);
    }

    &:focus {
      border: 0.5px solid var(--500, #1a1919);
    }

    &:disabled {
      background: var(--500, #b2b2b2);
      cursor: not-allowed;
    }
  `,

  outline: css`
    background: transparent;
    border: 0.5px solid var(--500, #1a1919);

    &:hover {
      border-bottom: 0.5px solid var(--500, #1a1919);
      background: var(--100, #fff);
    }

    &:focus {
      border: 0.5px solid var(--500, #1a1919);
    }

    &:disabled {
      border: 0.5px solid var(--500, #b2b2b2);
      cursor: not-allowed;
      color: var(--500, #b2b2b2);
    }
  `,
};

export const Button = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.42px;
  transition: all 0.2s ease;
  border: none;
  color: var(--color-text-dark, #1a1919);
  ${({ size }) =>
    size === "xl" &&
    css`
      width: 100%;
    `}

  ${({ variant = "primary" }) => buttonVariants[variant]}
`;
