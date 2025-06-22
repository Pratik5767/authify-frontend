import { createContext, useEffect, useState } from "react";
import { AppConstant } from "../utils/constants.js";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true;

    const backendUrl = AppConstant.BACKEND_URI;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getUserData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/profile`);
            if (response.status === 200) {
                setUserData(response.data);
            } else {
                toast.error("Unable to retrive the profile");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getAuthState = async () => {
        try {
            const response = await axios.get(`${backendUrl}/is-authenticated`);
            if (response.status === 200 && response.data === true) {
                setIsLoggedIn(true);
                await getUserData();
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getAuthState();
    }, [])
    

    const contextValue = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}