import { createGlobalStyle } from 'styled-components'

const GlobalFonts = createGlobalStyle`
  //900
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Black.ttf");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-BlackItalic.ttf");
    font-style: italic;
    font-weight: 900;
    font-display: swap;
  }
  //700
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-BoldItalic.ttf");
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
  //500
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Medium.ttf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-MediumItalic.ttf");
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }
  //400
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Italic.ttf");
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  //300
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Light.ttf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-LightItalic.ttf");
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  //100
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Thin.ttf");
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-ThinItalic.ttf");
    font-style: italic;
    font-weight: 100;
    font-display: swap;
  }
`

export default GlobalFonts
