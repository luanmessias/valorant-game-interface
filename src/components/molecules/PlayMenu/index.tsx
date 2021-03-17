import React, { useState } from 'react'
import { Container, Menu, MenuItem } from './Styles'

const PLayMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(1)

  return (
    <Container>
      <Menu ActiveOpt={selectedOption}>
        <MenuItem onClick={() => setSelectedOption(1)}>
          NO CLASSIFICATION
        </MenuItem>
        <MenuItem onClick={() => setSelectedOption(2)}>COMPETITIVE</MenuItem>
        <MenuItem onClick={() => setSelectedOption(3)}>SPIKE RUSH</MenuItem>
        <MenuItem onClick={() => setSelectedOption(4)}>DEATHMATCH</MenuItem>
      </Menu>
    </Container>
  )
}

export default PLayMenu
