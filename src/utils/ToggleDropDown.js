import { createContext } from "react";

const ToggleDropDown = createContext({
    isOpen: false,
    isNextOpen: false,
})

export default ToggleDropDown;