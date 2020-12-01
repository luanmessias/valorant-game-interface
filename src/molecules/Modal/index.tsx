import React from 'react'
import { Container, Content } from './Styles'
import { motion, AnimatePresence } from 'framer-motion'

export interface IModalProps {
  children?: React.ReactNode
  onClick?: any
  showModal: boolean
  setShowModal: any
}

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

const Modal: React.FC<IModalProps> = ({
  showModal,
  setShowModal,
  children
}) => {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      {showModal && (
        <Container
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
          onClick={() => setShowModal(false)}
        >
          <Content variants={contentModal}>{children}</Content>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Modal

// export interface IModalProps {
//   children?: React.ReactNode
//   onClick?: any
// }

// const Modal: React.FC<IModalProps> = ({ children, onClick, ...rest }) => {
//   return (
//     <Container {...rest} onClick={onClick}>
//       {children}
//     </Container>
//   )
// }

// export default Modal
