/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { typeScale } from "../utilities";
import { PrimaryButton } from "./Button";
import { Illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  width: 800px;
  height: 459px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const connectHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const connectText = styled.p`
  font-size: ${typeScale.paragraph};
  text-align: center;
  max-width: 70%;
`;

const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  height: 24px;
  width: 24px;
  padding: 0;
`;

export const Modal = () => {
  return (
    <ModalWrapper>
      <img
        src={Illustrations.Connect}
        style={{
          width: "302px",
          height: "158.1px",
        }}
        alt=" Connect with me "
      />
      <connectHeader>Hey Let's Connect!</connectHeader>
      <connectText>
        Hit me up, on Linkedin/Github/Twitter, you can find the address in
        Connect Section.
      </connectText>
      <PrimaryButton onClick={() => alert("I'll revert back soon!")}>
        Connect
      </PrimaryButton>
      <CloseButton
        aria-label="Close Modal"
        onClick={() => alert("Modal Closed!")}
      >
        <CloseIcon />
      </CloseButton>
    </ModalWrapper>
  );
};
