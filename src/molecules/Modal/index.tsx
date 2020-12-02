import React from 'react'
import { Container, Content } from './Styles'
import { AnimatePresence } from 'framer-motion'
import { useModalContext } from '@/context/Modal'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const contentModal = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 }
  }
}

const Modal: React.FC = () => {
  const {
    modalState: { message, visible },
    closeModal
  } = useModalContext()

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={visible}>
      {visible && (
        <Container
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <Content variants={contentModal} onClick={closeModal}>
            {message}
          </Content>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Modal
