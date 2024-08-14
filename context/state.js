import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from "next/router"

const AppContext = createContext()


export function AppWrapper({ children }) {
  const [profile, setProfile] = useState({})
  const [token, setToken] = useState("")
  const [isModalVisible, setModalVisibility] = useState(false)
  const [hasAgreedToPrivacy, setHasAgreedToPrivacy] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasAgreed = JSON.parse(localStorage.getItem('hasAgreedToPrivacyPolicy'))
    setHasAgreedToPrivacy(hasAgreed)
    setModalVisibility(!hasAgreed)
  }, [])

  const agreeToPrivacy = () => {
    localStorage.setItem('hasAgreedToPrivacyPolicy', JSON.stringify(true))
    setHasAgreedToPrivacy(true)
    setModalVisibility(false)
  }


  return (
    <AppContext.Provider value={{ 
      profile, 
      token, 
      setToken, 
      setProfile, 
      isModalVisible,
      setModalVisibility,
      hasAgreedToPrivacy,
      agreeToPrivacy
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}