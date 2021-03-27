import React from 'react'
import {
  Container,
  LineUp,
  LineDown,
  Content,
  CloseModal,
  ArrowSVG
} from './Styles'
import AimSVF from '@/svg/aim.svg'
import ArrowConfigSVG from '@/svg/arrow-config.svg'
import { useModalContext } from '@/context/Modal'
import DefaultButton from '@/atoms/DefaultButton'

const ConfigDalog: React.FC = () => {
  const { closeModal }: any = useModalContext()
  return (
    <Container>
      <LineUp />
      <Content>
        <CloseModal onClick={closeModal}>
          <AimSVF />
        </CloseModal>
        <DefaultButton className="DialogButton" href="/">
          Configuration
        </DefaultButton>
        <DefaultButton className="DialogButton" href="/">
          Support
        </DefaultButton>
        <DefaultButton className="DialogButton" href="/">
          About
        </DefaultButton>
        <ArrowSVG>
          <ArrowConfigSVG />
        </ArrowSVG>
        <DefaultButton className="DialogButtonRed" href="/">
          Exit to desktop
        </DefaultButton>
      </Content>
      <LineDown />
    </Container>
  )
}

export default ConfigDalog
