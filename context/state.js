import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from "next/router"

const AppContext = createContext();



export function AppWrapper({ children }) {
  const [profile, setProfile] = useState({})
  const [token, setToken] = useState("")
  const router = useRouter()


  return (
    <AppContext.Provider value={{ profile, token, setToken, setProfile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}