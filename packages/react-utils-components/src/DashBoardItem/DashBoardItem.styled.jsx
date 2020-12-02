import styled, { css } from "styled-components";
import { Col } from "react-bootstrap";

export const ColContainer = styled(Col)`
  ${({ classMovile, itemPositionType }) => {
    if (classMovile) {
      if (itemPositionType && itemPositionType === "first-item") {
        return css`
          padding-right: 15px !important;
          margin-bottom: 15px;
        `;
      } else if (itemPositionType && itemPositionType === "last-item") {
        return css`
          padding-left: 15px !important;
          margin-bottom: 15px;
        `;
      } else {
        return css`
          padding-right: 15px !important;
          padding-left: 15px !important;
          margin-bottom: 15px;
        `;
      }
    } else {
      if (itemPositionType && itemPositionType === "first-item") {
        return css`
          padding-right: 7.5px !important;
        `;
      } else if (itemPositionType && itemPositionType === "last-item") {
        return css`
          padding-left: 7.5px !important;
        `;
      } else if (itemPositionType && itemPositionType === "normal-item") {
        return css`
          padding-right: 7.5px !important;
          padding-left: 7.5px !important;
        `;
      } else {
        return css`
          padding-right: 15px !important;
          padding-left: 15px !important;
        `;
      }
    }
  }}
`;

export const ItemContainer = styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}px` : "#ffffff"};
  border: 1px solid
    ${({ borderColor }) => (borderColor ? `${borderColor}px` : "#cccccc")};
  height: ${({ height }) => (height ? `${height}px` : "200px")};
`;

export const ItemTitle = styled.div`
  padding: 0.2rem 0.4rem;
  font-weight: 600;
  font-size: ${({ titleSize }) => (titleSize ? `${titleSize}rem` : "0.75rem")};
`;

export const ItemIconTitle = styled.i`
  margin-right: 5px;
`;

export const ItemBody = styled.div`
  overflow: hidden;
`;
