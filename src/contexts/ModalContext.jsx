import { useState, createContext } from "react";

export const ModalContext = createContext()

export default function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}