import React from "react";
import {
  SkillContent,
  SkillImage,
  SkillProgressImage,
  SkillText,
  SkillWrapper,
} from "./styled/SkillWrapper";

interface SkillProps {
  text: string;
  textType: "big" | "small";
  skillImage: string;
  progressBarImage: string;
}
const Skill = ({
  text,
  skillImage,
  progressBarImage,
  textType,
}: SkillProps) => {
  return (
    <SkillWrapper>
      <SkillImage src={skillImage} />
      <SkillContent>
        <SkillText textType={textType}>{text}</SkillText>
        <SkillProgressImage src={progressBarImage} />
      </SkillContent>
    </SkillWrapper>
  );
};

export default Skill;
