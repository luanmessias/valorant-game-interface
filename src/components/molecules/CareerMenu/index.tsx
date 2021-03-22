import React, { useState } from 'react'
import { Container, Menu, MenuItem } from './Styles'

const CareerMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(1)

  return (
    <Container>
      <Menu ActiveOpt={selectedOption}>
        <MenuItem onClick={() => setSelectedOption(1)}>MATCH HISTORY</MenuItem>
        <MenuItem onClick={() => setSelectedOption(2)}>ACT RANK</MenuItem>
        <MenuItem onClick={() => setSelectedOption(3)}>LEADERBOARD</MenuItem>
      </Menu>
    </Container>
  )
}

export default CareerMenu
