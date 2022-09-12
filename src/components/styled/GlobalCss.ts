import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  }

  html {
  scroll-behavior: smooth;
}

  h1{
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 72px;
  letter-spacing: -0.03em;
  color: #000000;
  }

  h2{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    text-align: center;
    letter-spacing: -0.03em;

    color: #000000;
  }

  h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.01em;
    color: #000000;
  }

  p{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #4D4D4D;
  }
    `;
