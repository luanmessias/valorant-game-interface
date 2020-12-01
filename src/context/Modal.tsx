import React, { createContext, useState } from 'react'

export const ModalContext = createContext()
export default function ModalProvider({ children }: any) {
  const [showModal, setShowModal] = useState(false)

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  )
}
