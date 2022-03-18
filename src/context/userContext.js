import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

function UserProvider({children}) {
  const [isLoggedIn, setIsLoggedIn]  = useState(false);
  const setLoggedIn = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  }
  const logoutUser = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }
  useEffect(()=>{
    if(localStorage.getItem('token')) {
        setIsLoggedIn(true);
    }
  },[]);
  return (
    <userContext.Provider value={{isLoggedIn, setLoggedIn, logoutUser}}  >
        {children}
    </userContext.Provider>
  )
}

export default UserProvider;