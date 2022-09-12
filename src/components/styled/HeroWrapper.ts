import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 628px;
  margin-left: 5%;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin-top: 163px;
  padding-top: 70px;

  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    letter-spacing: 0.03em;

    /* Xyluz Blue */

    color: #2351dc;
  }

  p {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */

    letter-spacing: 0.03em;

    /* Xyluz Blue */

    color: #2351dc;
  }
`;

export const HeroImage = styled.div`
  background-color: #d3dcf8;
  padding-top: 70px;
  height: 688px;
  overflow: hidden;
`;
