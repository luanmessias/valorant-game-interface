import React, { useState } from 'react'
import { Container, Button, Switch } from './Styles'
import CloseGroupIconSVG from '@/svg/close-group-icon.svg'
import CloseGroupTrackSVG from '@/svg/close-group-track.svg'

const CloseGroupButton: React.FC = () => {
  const [buttonActive, setButtonActive] = useState(false)

  return (
    <Container>
      <Button>
        <span>GRUPO FECHADO</span>
        <Switch
          data-active={buttonActive}
          onClick={() => setButtonActive(!buttonActive)}
        >
          <CloseGroupIconSVG />
          <CloseGroupTrackSVG />
        </Switch>
      </Button>
    </Container>
  )
}

export default CloseGroupButton
