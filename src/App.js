import React from "react";
import logo from "./logo.svg";

import Img from "./components/atoms/Img";
import ToggleView from "./components/organisms/ToggleView";
import UseTabs from "./components/organisms/Hooks/UseTabs";
import UseClick from "./components/organisms/Hooks/UseClick";
import UseConfirm from "./components/organisms/Hooks/UseConfirm";
import UsePreventLeave from "./components/organisms/Hooks/UsePreventLeave";
import UseBeforeLeave from "./components/organisms/Hooks/UseBeforeLeave";
import UseFadeIn from "./components/organisms/Hooks/UseFadeIn";
import UseNavigator from "./components/organisms/Hooks/UseNavigator";

function App() {
  return (
    <div>
      <ToggleView height={600}>
        <Img src={logo} alt="logo" size={"500px"} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" rel="noopener noreferrer">
          Learn React
        </a>
      </ToggleView>
      <UseNavigator />
    </div>
  );
}

export default App;
