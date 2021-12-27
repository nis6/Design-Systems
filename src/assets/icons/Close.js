import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper>
    <path
      d="M0.921536 0L0 0.921536L11.0785 12L0 23.0785L0.921536 24L12 12.9215L23.0785 24L24 23.0785L12.9215 12L24 0.921536L23.0785 0L12 11.0785L0.921536 0Z"
      fill="#737581"
    />
  </CloseIconWrapper>
);
