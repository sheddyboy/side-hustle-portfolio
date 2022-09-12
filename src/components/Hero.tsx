import React from "react";
import { HeroContent, HeroImage, HeroWrapper } from "./styled/HeroWrapper";
import {
  Linkedin,
  SocialLink,
  SocialLinks,
  Twitter,
} from "./styled/NavWrapper";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <span>HI THERE</span>
        <p>I AM SEYI ONIFADE</p>
        <h1>
          A Top-notch Developer,
          <br />
          Writer and Mentor
        </h1>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/">
            <Linkedin src="/linkedin.svg" />
          </SocialLink>
          <SocialLink href="https://twitter.com/">
            <Twitter src="/twitter.svg" />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      <HeroImage>
        <img src="/hero-image.png" alt="" />
      </HeroImage>
    </HeroWrapper>
  );
};

export default Hero;
