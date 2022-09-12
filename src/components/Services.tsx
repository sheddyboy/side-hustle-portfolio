import React from "react";
import Service from "./Service";
import { Container } from "./styled/Container";
import { Section } from "./styled/Section";
import { ServicesGrid, ServicesWrapper, Text } from "./styled/ServicesWrapper";

const Services = () => {
  return (
    <Section backgroundColor="#FBFCFE">
      <Container>
        <ServicesWrapper id="services">
          <h2>Services I Render.</h2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus. Phasellus ac nisi augue.
          </Text>
          <ServicesGrid>
            <Service
              title="Training"
              serviceImage="/presentation (1) 1.png"
              message="I offer instructor-led training in a way that fits with the way you work. "
            />
            <Service
              title="IT Consulting."
              serviceImage="/consultation 1.png"
              message="I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
            />
            <Service
              title="Responsive Web Design"
              serviceImage="/responsive (1) 1.png"
              message="I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better."
            />
            <Service
              title="Database Development"
              serviceImage="/server 1.png"
              message="With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization."
            />
            <Service
              title="Customer Software Development"
              serviceImage="/presentation (1) 1.png"
              message="I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems."
            />
            <Service
              title="Software Testing"
              serviceImage="/checklist 1.png"
              message="I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. "
            />
            <Service
              title="Saas Development"
              serviceImage="/cloud (1) 1.png"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus."
            />
            <Service
              title="Technical Writing"
              serviceImage="/notes 1.png"
              message="I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information."
            />
            <Service
              title="Web Development"
              serviceImage="/seo (1) 1.png"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus."
            />
          </ServicesGrid>
        </ServicesWrapper>
      </Container>
    </Section>
  );
};

export default Services;
