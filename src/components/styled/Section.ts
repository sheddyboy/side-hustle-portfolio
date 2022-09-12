import styled from "styled-components";

interface SectionProps {
  backgroundColor?: string;
}

export const Section = styled.div<SectionProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
