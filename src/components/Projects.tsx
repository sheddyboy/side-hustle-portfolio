import React from "react";
import { Container } from "./styled/Container";
import {
  ProjectsGrid,
  ProjectsGridItem,
  ProjectsWrapper,
} from "./styled/ProjectsWrapper";
import { Section } from "./styled/Section";
import { Text } from "./styled/Text";

const Projects = () => {
  return (
    <Section backgroundColor="#FBFCFE">
      <Container>
        <ProjectsWrapper id="projects">
          <h2>Milestones of Projects</h2>
          <Text>
            Here are a few people & projects i’ve patnered and worked on.
          </Text>
          <ProjectsGrid>
            <ProjectsGridItem
              backgroundColor="#2351DC"
              gridColumn="1/2"
              gridRow="1/3"
            >
              <h3>Project Title</h3>
              <Text>Android, IoT</Text>
            </ProjectsGridItem>
            <ProjectsGridItem
              backgroundColor="#0DC397"
              gridColumn="2/4"
              gridRow="1/2"
            >
              <h3>Co-Founder @ZURI Internship</h3>
              <Text>Web, PHP, Python</Text>
            </ProjectsGridItem>
            <ProjectsGridItem
              backgroundColor="#0A1842"
              gridColumn="2/3"
              gridRow="2/3"
            >
              <h3>Co-Fouder HNG internship</h3>
              <Text></Text>
            </ProjectsGridItem>
            <ProjectsGridItem
              backgroundColor="#2351DC"
              gridColumn="3/4"
              gridRow="2/4"
            >
              <h3>Project Title</h3>
              <Text>Android, IoT</Text>
            </ProjectsGridItem>
            <ProjectsGridItem
              backgroundColor="#1C41B0"
              gridColumn="1/3"
              gridRow="3/5"
            >
              <h3>Project Title</h3>
              <Text>Android, IoT</Text>
            </ProjectsGridItem>
            <ProjectsGridItem
              backgroundColor="#2351DC"
              gridColumn="3/4"
              gridRow="4/5"
            >
              <h3>Project Title</h3>
              <Text>Android, IoT</Text>
            </ProjectsGridItem>
          </ProjectsGrid>
        </ProjectsWrapper>
      </Container>
    </Section>
  );
};

export default Projects;
