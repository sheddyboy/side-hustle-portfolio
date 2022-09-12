import React from "react";
import { AboutWrapper } from "./styled/AboutWrapper";
import {
  Linkedin,
  SocialLink,
  SocialLinks,
  Twitter,
} from "./styled/NavWrapper";

const About = () => {
  return (
    <AboutWrapper id="about">
      <h2>About Me</h2>
      <p>
        Seyi Onifade is a passionate and goal driven Techpreneur whose interest
        is in using technology to build solutions to solve real world problems.
      </p>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/">
          <Linkedin src="/linkedin.svg" />
        </SocialLink>
        <SocialLink href="https://twitter.com/">
          <Twitter src="/twitter.svg" />
        </SocialLink>
      </SocialLinks>
    </AboutWrapper>
  );
};

export default About;
