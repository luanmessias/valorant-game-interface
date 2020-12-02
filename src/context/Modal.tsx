import React, { createContext, useState, useContext } from 'react'

const ModalContext = createContext({})

const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ visible: false })

  const createModal = payload => setModalState({ ...payload, visible: true })
  const openModal = modalContent => createModal({ message: modalContent })
  const closeModal = () => setModalState({ visible: false })

  return (
    <ModalContext.Provider
      value={{
        modalState,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModalContext = () => {
  const context = useContext(ModalContext)
  return context
}

export { useModalContext, ModalProvider }
