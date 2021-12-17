import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Button";
import { GlobalStyle } from "./utilities";

const App = () => (
        <div>
            <PrimaryButton>Hello</PrimaryButton><br/>
            <SecondaryButton>Hello</SecondaryButton><br/>
            <TertiaryButton>Hello</TertiaryButton><br/>
            <GlobalStyle/>
        </div>
    );

ReactDOM.render(<App />, document.querySelector("#root"));