import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SecondaryButton, Modal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utilities";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
        <SecondaryButton onClick={() => setTheme(!theme)}>
          Theme
        </SecondaryButton>
        <div>
          <Modal />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
