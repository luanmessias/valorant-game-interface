import React from 'react'
import ReturnButton from '@/atoms/ReturnButton'
import CollectionPLayerInfo from '@/molecules/CollectionPLayerInfo'
import CollectionGuns from '@/molecules/CollectionGuns'

import {
  Container,
  ReturnBtContainer,
  Content
} from '@/globalStyles/pages/colection'

const Collection = () => {
  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <Content>
        <CollectionPLayerInfo />
        <CollectionGuns />
      </Content>
    </Container>
  )
}

export default Collection
