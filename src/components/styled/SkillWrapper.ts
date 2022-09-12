import styled from "styled-components";

export const SkillWrapper = styled.div`
  display: flex;
`;

export const SkillImage = styled.img`
  margin-right: 10px;
`;

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
`;

interface SkillTestProps {
  textType: "big" | "small";
}
export const SkillText = styled.h3<SkillTestProps>`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${({ textType }) => (textType === "big" ? "600" : "700")};
  font-size: ${({ textType }) => (textType === "big" ? "24px" : "30px")};
  line-height: ${({ textType }) => (textType === "big" ? "33px" : "41px")};
  /* identical to box height */

  letter-spacing: ${({ textType }) =>
    textType === "big" ? "-0.02em" : "-0.03em"};

  color: #000000;
`;

export const SkillProgressImage = styled.img``;
