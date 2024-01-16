import { createContext } from "react";

const MenuContext = createContext({
    isDisplaying: false,
    image: null,
    name: null,
    description: null,
    techstack: null,
})

export default MenuContext;