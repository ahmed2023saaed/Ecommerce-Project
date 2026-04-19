import React, { useState } from "react";
import { LogContext } from "./isLogContext";


export default function LogProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
        <LogContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
        {children}
        </LogContext.Provider>
        </>
    )

}