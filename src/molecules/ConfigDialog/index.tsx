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
import ConfigDialogButton from '@/atoms/ConfigDialogButton'

const ConfigDalog: React.FC = () => {
  const { closeModal }: any = useModalContext()
  return (
    <Container>
      <LineUp />
      <Content>
        <CloseModal onClick={closeModal}>
          <AimSVF />
        </CloseModal>
        <ConfigDialogButton className="DialogButton" href="/">
          Configuracoes
        </ConfigDialogButton>
        <ConfigDialogButton className="DialogButton" href="/">
          Suporte
        </ConfigDialogButton>
        <ConfigDialogButton className="DialogButton" href="/">
          Sobre
        </ConfigDialogButton>
        <ArrowSVG>
          <ArrowConfigSVG />
        </ArrowSVG>
        <ConfigDialogButton className="DialogButtonRed" href="/">
          Sair para a area de trabalho
        </ConfigDialogButton>
      </Content>
      <LineDown />
    </Container>
  )
}

export default ConfigDalog
