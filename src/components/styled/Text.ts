import styled from "styled-components";

interface TextProps {
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
}

export const Text = styled.p<TextProps>`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${({ color }) => color};
`;
