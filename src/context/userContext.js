import { createContext } from "react";
import React from 'react'

export const userContext = createContext();

function UserProvider({children}) {
  return (
    <userContext.Provider>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider;