import React from "react";
import { Section } from "./styled/Section";
import {
  TestimoniesContent,
  TestimoniesText,
  TestimoniesWrapper,
} from "./styled/TestimoniesWrapper";
import Testimonial from "./Testimonial";

const Testimonies = () => {
  return (
    <Section>
      <TestimoniesWrapper>
        <TestimoniesText>
          <h2>Testimonies & Recommendations</h2>
        </TestimoniesText>
        <TestimoniesContent>
          <Testimonial
            title="Femi Okaseun"
            text="Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
          />
          <Testimonial
            title="Testifier2"
            text="Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
          />
          <Testimonial
            title="Testifier 3"
            text="Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
          />
          <Testimonial
            title="Testifier 3"
            text="Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
          />
        </TestimoniesContent>
      </TestimoniesWrapper>
    </Section>
  );
};

export default Testimonies;
