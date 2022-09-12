import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 650px;
`;
export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 142px;
  padding-bottom: 126px;
  padding-left: 121px;
`;
export const ContactEmail = styled.div`
  margin-top: 49px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
  }
`;
export const ContactPhone = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 16px;
  }
`;
export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1c41b0;
  padding: 100px 114px 100px 82px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 40px;
    width: 100%;
  }

  label {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.03em;

    /* White */

    color: #ffffff;
  }

  input[type="text"] {
    border: none;
    background-color: transparent;
    border-bottom: 0.6px solid rgba(255, 255, 255, 1);
    margin-bottom: 30px;
    width: 100%;
  }
  input[type="submit"] {
    background: #ffffff;
    /* White */

    border: 1px solid #ffffff;
    border-radius: 12px;
    padding: 17px 50px 17px 50px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: -0.03em;

    /* Xyluz Blue */

    color: #2351dc;
  }
`;
