import { Container } from "./styled/Container";
import {
  Dot,
  Left,
  Linkedin,
  Logo,
  NavLink,
  NavLinks,
  NavWrapper,
  Right,
  SocialLink,
  SocialLinks,
  Twitter,
} from "./styled/NavWrapper";

const Nav = () => {
  return (
    <Container>
      <NavWrapper>
        <Left>
          <Logo>
            Seyi Onifade<Dot>.</Dot>
          </Logo>
          <NavLinks>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact Me</NavLink>
          </NavLinks>
        </Left>
        <Right>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/">
              <Linkedin src="/linkedin.svg" />
            </SocialLink>
            <SocialLink href="https://twitter.com/">
              <Twitter src="/twitter.svg" />
            </SocialLink>
          </SocialLinks>
        </Right>
      </NavWrapper>
    </Container>
  );
};

export default Nav;
