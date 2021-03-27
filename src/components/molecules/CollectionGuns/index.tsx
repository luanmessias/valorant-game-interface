import React from 'react'
import {
  Container,
  Title,
  ColGuns,
  GunsGroup,
  GunContainer,
  CloseModal,
  ModalGun,
  ModalGunName
} from './styles'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import PlaceholderTag from '@/atoms/PlaceholderTag'
import { useModalContext } from '@/context/Modal'
import AimSVF from '@/svg/aim.svg'

interface Gun {
  name: string
  category: string
}

const CollectionGuns = () => {
  const { closeModal, openModal }: any = useModalContext()
  const gunsData = SwrFetchHook<Gun[]>('/api/guns').data

  if (!gunsData) {
    return (
      <Container data-preloader="true">
        <PlaceholderTag
          width="100%"
          height="300px"
          color="transparent"
          showLoading={true}
        />
      </Container>
    )
  }

  const sidearm = gunsData.filter(g => g.category === 'sidearm')
  const smg = gunsData.filter(g => g.category === 'smg')
  const shotgun = gunsData.filter(g => g.category === 'shotgun')
  const rifle = gunsData.filter(g => g.category === 'rifle')
  const sniper = gunsData.filter(g => g.category === 'sniper')
  const machinegun = gunsData.filter(g => g.category === 'machinegun')
  const melee = gunsData.filter(g => g.category === 'melee')

  const GunModal = ({ name, img }) => {
    return (
      <div onClick={closeModal}>
        <CloseModal onClick={closeModal}>
          <AimSVF />
        </CloseModal>
        <ModalGunName>{name}</ModalGunName>
        <ModalGun>
          <img src={`/img/guns/${img}.png`} />
        </ModalGun>
      </div>
    )
  }

  const Gun = ({ name, category }) => {
    const imgName = name.toLowerCase().replace(/\s+/g, '')
    return (
      <GunContainer
        data-category={category}
        onClick={() => openModal(<GunModal img={imgName} name={name} />)}
      >
        <div>
          <img src={`/img/guns/${imgName}.png`} />
        </div>
        <span>{name}</span>
      </GunContainer>
    )
  }

  return (
    <Container>
      <ColGuns>
        <GunsGroup>
          <Title>SIDEARMS</Title>
          {sidearm.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
      </ColGuns>
      <ColGuns>
        <GunsGroup>
          <Title>SMGS</Title>
          {smg.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
        <GunsGroup>
          <Title>SHOTGUNS</Title>
          {shotgun.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
      </ColGuns>
      <ColGuns>
        <GunsGroup>
          <Title>RIFLES</Title>
          {rifle.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
      </ColGuns>
      <ColGuns>
        <GunsGroup>
          <Title>SNIPER RIFLES</Title>
          {sniper.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
        <GunsGroup>
          <Title>MACHINE GUNS</Title>
          {machinegun.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
        <GunsGroup>
          <Title>MELEE</Title>
          {melee.map(({ name, category }) => (
            <Gun key={name} name={name} category={category} />
          ))}
        </GunsGroup>
      </ColGuns>
    </Container>
  )
}

export default CollectionGuns
