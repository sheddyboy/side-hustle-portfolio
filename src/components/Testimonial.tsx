import React from "react";
import {
  TestimonialImage,
  TestimonialWrapper,
} from "./styled/TestimonialWrapper";
import { Text } from "./styled/Text";

interface TestimonialProps {
  title: string;
  text: string;
}
const Testimonial = ({ text, title }: TestimonialProps) => {
  return (
    <TestimonialWrapper>
      <TestimonialImage src="/Ellipse 6.png" />
      <h3>{title}</h3>
      <Text fontSize="16px">{text}</Text>
    </TestimonialWrapper>
  );
};

export default Testimonial;
