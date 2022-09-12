import React from "react";
import {
  ContactEmail,
  ContactLeft,
  ContactPhone,
  ContactRight,
  ContactWrapper,
} from "./styled/ContactWrapper";
import {
  Linkedin,
  SocialLink,
  SocialLinks,
  Twitter,
} from "./styled/NavWrapper";
import { Section } from "./styled/Section";
import { Text } from "./styled/Text";

const Contact = () => {
  return (
    <Section>
      <ContactWrapper id="contact">
        <ContactLeft>
          <h2>Get In Touch.</h2>
          <Text textAlign="start" marginBottom="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus. Phasellus ac nisi augue.
          </Text>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/">
              <Linkedin src="/linkedin.svg" />
            </SocialLink>
            <SocialLink href="https://twitter.com/">
              <Twitter src="/twitter.svg" />
            </SocialLink>
            <Text>- Xyluz</Text>
          </SocialLinks>
          <ContactEmail>
            <img src="/Message.png" alt="" width={35} height={35} />
            <div>
              <Text>seyionifade@gmail.com</Text>
              <Text>Send a message Anytime!</Text>
            </div>
          </ContactEmail>
          <ContactPhone>
            <img src="/Call.png" alt="" width={35} height={35} />
            <div>
              <Text>+234 - 1245 - 13966</Text>
              <Text>Send a message Anytime!</Text>
            </div>
          </ContactPhone>
        </ContactLeft>
        <ContactRight>
          <Text color="rgba(255, 255, 255, 0.7)">Need a Service?</Text>
          <Text color="#ffffff" fontSize="28px">
            Send A Message
          </Text>
          <form action="">
            <label>Enter Fullname</label>
            <input type="text" />
            <label>Enter Email Address</label>
            <input type="text" />
            <label>Write A Message</label>
            <input type="text" />
            <input type="submit" value={"Send Message"} />
          </form>
        </ContactRight>
      </ContactWrapper>
    </Section>
  );
};

export default Contact;
