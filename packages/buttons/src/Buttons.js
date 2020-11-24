import React from "react";
import styled from "styled-components";

import { SmallText } from "@aguemat/typography";

export const ButtonSmall = ({ text, ...props }) => {
  return (
    <Button {...props}>
      <SmallText>{text}</SmallText>
    </Button>
  );
};

export const Button = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  color: white;
  background-color: dodgerblue;
  border-color: dodgerblue;
`;
