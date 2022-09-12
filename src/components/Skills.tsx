import React from "react";
import Skill from "./Skill";
import { Container } from "./styled/Container";
import { SkillsGrid, SkillsWrapper } from "./styled/SkillsWrapper";

const Skills = () => {
  return (
    <Container>
      <SkillsWrapper>
        <h2>My Skills</h2>
        <p>Here are a few skills i possess</p>
        <SkillsGrid>
          <Skill
            text="PHP"
            textType="small"
            skillImage="/php-img.png"
            progressBarImage="/php-pb.png"
          />
          <Skill
            text="Python"
            textType="big"
            skillImage="/phyton-img.png"
            progressBarImage="/phyton-pb.png"
          />
          <Skill
            text="Javascript"
            textType="small"
            skillImage="/js-img.png"
            progressBarImage="/js-pb.png"
          />
          <Skill
            text="WordPress"
            textType="big"
            skillImage="/wp-img.png"
            progressBarImage="/wp-pb.png"
          />
          <Skill
            text="Microsoft Office"
            textType="small"
            skillImage="/mo-img.png"
            progressBarImage="/mo-pb.png"
          />
          <Skill
            text="HTML"
            textType="big"
            skillImage="/html-img.png"
            progressBarImage="/html-pb.png"
          />
        </SkillsGrid>
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;
