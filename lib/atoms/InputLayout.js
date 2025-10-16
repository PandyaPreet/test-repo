"use client";
import React from "react";
import { IconContainer, InputWrapper, StyledInput } from "./StyledInput";

const InputLayout = ({
  leftIcon,
  rightIcon,
  dark,
  disabled,
  onLeftIconClick,
  onRightIconClick,
  ...inputProps
}) => {
  return (
    <InputWrapper dark={dark} disabled={disabled}>
      {leftIcon && (
        <IconContainer
          side="left"
          onClick={!disabled ? onLeftIconClick : undefined}
        >
          {leftIcon}
        </IconContainer>
      )}

      <StyledInput disabled={disabled} {...inputProps} />

      {rightIcon && (
        <IconContainer
          side="right"
          onClick={!disabled ? onRightIconClick : undefined}
        >
          {rightIcon}
        </IconContainer>
      )}
    </InputWrapper>
  );
};

export default InputLayout;
