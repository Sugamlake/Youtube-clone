import React, {createContext, useState} from "react";

export const VideosContext = createContext();

export const VideosProvider = ({children}) => {
    const [menu, setMenu] = useState(false);
    const [isOnVideoPage, setIsOnVideoPage] = useState(false);
    return (
        <VideosContext.Provider value={{menu, setMenu, isOnVideoPage, setIsOnVideoPage}}>
            {children}
        </VideosContext.Provider>
    )
}
