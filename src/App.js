import { useEffect, useState } from "react";
import Body from "./components/Body";
import MenuContext from "./utils/MenuContext";
import ToggleDropDown from "./utils/ToggleDropDown";


function App() {

  const [appDisplaying, setAppDisplaying] = useState(false);
  const [appName, setAppName] = useState(null);
  const [appDescription, setAppDescription] = useState(null);
  const [appTechStack, setAppTechStack] = useState(null);
  const [appImage, setAppImage] = useState(null);
  const [appIsOpen, setAppIsOpen] = useState(false);
  const [appIsNextOpen, setAppIsNextOpen] = useState(false);

  return (
    <ToggleDropDown.Provider value={{ isOpen: appIsOpen, setAppIsOpen, isNextOpen: appIsNextOpen, setAppIsNextOpen }}>
      <MenuContext.Provider value={{ isDisplaying: appDisplaying, image: appImage, setAppImage, setAppDisplaying, name: appName, setAppName, description: appDescription, setAppDescription, techstack: appTechStack, setAppTechStack }}>
        <div>
          <Body />
        </div>
      </MenuContext.Provider>
    </ToggleDropDown.Provider>
  );
}

export default App;


/*
Header
Center
 -About
 -Education
 -Skills
 -Projects
 -Contact
Footer
 */