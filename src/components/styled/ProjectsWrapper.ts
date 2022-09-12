import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 113px;
  padding-bottom: 221px;
`;
export const ProjectsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 1290px;
  width: 100%;
  margin-top: 70px;
`;

interface ProjectsGridItemProps {
  gridColumn: string;
  gridRow: string;
  backgroundColor: string;
}
export const ProjectsGridItem = styled.div<ProjectsGridItemProps>`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px 40px 0px 40px;
  /* display: ; */

  h3 {
    color: #ffffff;
  }

  p {
    color: #ffffff;
    text-align: start;
  }
`;
