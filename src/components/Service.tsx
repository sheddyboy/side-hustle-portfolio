import React from "react";
import { ServiceImage, ServiceWrapper, Text } from "./styled/ServiceWrapper";

interface ServiceProps {
  serviceImage: string;
  title: string;
  message: string;
}
const Service = ({ serviceImage, message, title }: ServiceProps) => {
  return (
    <ServiceWrapper>
      <ServiceImage src={serviceImage} />
      <h3>{title}</h3>
      <Text>{message}</Text>
    </ServiceWrapper>
  );
};

export default Service;
