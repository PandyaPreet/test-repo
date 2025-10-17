"use client";
import React from "react";
import {
  IconContainer,
  InputWrapper,
  MessageLabel,
  StyledInput,
  InputGroupWrapper,
} from "./StyledInput";

const InputLayout = ({
  leftIcon,
  rightIcon,
  dark,
  disabled,
  onLeftIconClick,
  onRightIconClick,
  message,
  isError,
  ...inputProps
}) => {
  return (
    <InputGroupWrapper>
      <InputWrapper dark={dark} disabled={disabled} isError={isError}>
        {leftIcon && (
          <IconContainer
            side="left"
            onClick={!disabled ? onLeftIconClick : undefined}
          >
            {leftIcon}
          </IconContainer>
        )}
        <StyledInput
          dark={dark}
          disabled={disabled}
          isError={isError}
          {...inputProps}
          autoComplete="off"
        />
        {rightIcon && (
          <IconContainer
            side="right"
            onClick={!disabled ? onRightIconClick : undefined}
          >
            {rightIcon}
          </IconContainer>
        )}
      </InputWrapper>
      {message && (
        <MessageLabel dark={dark} isError={isError}>
          {message}
        </MessageLabel>
      )}
    </InputGroupWrapper>
  );
};

export default InputLayout;
