import { createContext, useState } from "react";
import { AppConstant } from "../utils/constants.js";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = AppConstant.BACKEND_URI;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const contextValue = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}