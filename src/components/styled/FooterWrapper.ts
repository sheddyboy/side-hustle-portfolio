import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 110px 120px 118px 120px;
`;
export const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;

  div {
    border: 0.4px solid #ffffff;
    width: 300px;
    height: 0px;
  }
`;

export const FooterLogo = styled.h1`
  margin-right: 20px;
  margin-left: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  letter-spacing: -0.03em;

  color: #ffffff;
`;

export const FooterDot = styled.span`
  color: #2351dc;
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  margin-bottom: 25px;
`;

export const FooterSocialLink = styled.a`
  text-decoration: none;
`;
export const FooterLinkedin = styled.img``;
export const FooterTwitter = styled.img``;
export const FooterEmail = styled.img``;
export const FooterCopyright = styled.div``;
