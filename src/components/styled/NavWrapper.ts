import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 29px;
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
`;

export const Logo = styled.h1`
  margin-right: 98px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  letter-spacing: -0.03em;

  color: #000000;
`;

export const Dot = styled.span`
  color: #2351dc;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 30px;
`;

export const NavLink = styled.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.01em;

  color: #000000;
  text-decoration: none;
`;

export const Right = styled.div``;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
`;
export const Linkedin = styled.img``;
export const Twitter = styled.img``;
