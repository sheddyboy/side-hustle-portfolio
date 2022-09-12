import React from "react";
import {
  FooterCopyright,
  FooterDot,
  FooterEmail,
  FooterLinkedin,
  FooterLogo,
  FooterSocialLink,
  FooterSocialLinks,
  FooterTitle,
  FooterTwitter,
  FooterWrapper,
} from "./styled/FooterWrapper";
import { Section } from "./styled/Section";
import { Text } from "./styled/Text";

const Footer = () => {
  return (
    <Section backgroundColor="rgba(7, 16, 44, 1)">
      <FooterWrapper>
        <FooterTitle>
          <div></div>
          <FooterLogo>
            Seyi Onifade<FooterDot>.</FooterDot>
          </FooterLogo>
          <div></div>
        </FooterTitle>
        <FooterSocialLinks>
          <FooterSocialLink href="https://www.linkedin.com/">
            <FooterLinkedin src="/fLinkedin.png" />
          </FooterSocialLink>
          <FooterSocialLink href="https://twitter.com/">
            <FooterTwitter src="/fTwitter.png" />
          </FooterSocialLink>
          <FooterSocialLink href="https://mail.google.com/">
            <FooterEmail src="/fEmail.png" />
          </FooterSocialLink>
        </FooterSocialLinks>
        <FooterCopyright>
          <Text color="#FFFFFF" fontSize="16px" fontWeight="400">
            Copyright © 2021 | All rights Reserved
          </Text>
        </FooterCopyright>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
