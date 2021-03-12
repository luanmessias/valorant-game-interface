import React from 'react'
import NavLink from '@/atoms/NavLink'
import ValorantGameLink from '@/atoms/ValorantGameLink'
import GearConfig from '@/svg/gear-config.svg'
import ClockIconSvg from '@/svg/clock-icon.svg'
import MainNavCenterSvg from '@/svg/main-nav-center.svg'
import ValorantPointsSvg from '@/svg/valorant-points.svg'
import LogoSVG from '@/svg/valorant-logo.svg'
import RadiantPointsSvg from '@/svg/radiant-points.svg'
import { Container, SvgPlay, MobNav, MobMenu, MobFriends } from './Styles'
import { useModalContext } from '@/context/Modal'
import ConfigDialog from '@/molecules/ConfigDialog'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

interface INavItem {
  id: string
  url: string
  title: string
}

const MainNav = () => {
  const { openModal }: any = useModalContext()
  const { data, error } = useSWR('/api/categories', fetcher)

  if (error) return <div>Failed to load</div>

  if (!data) {
    return (
      <>
        <MobNav>
          <MobMenu />
          <LogoSVG />
          <MobFriends />
        </MobNav>
        <Container className="placeholderCont">
          <ul>
            <li
              className="placeholder website"
              style={{ width: '100px', height: '30px' }}
            ></li>

            <li
              className="placeholder clock"
              style={{ width: '100px', height: '30px' }}
            ></li>
            <li
              className="placeholder"
              style={{ width: '100px', height: '30px' }}
            ></li>
            <li
              className="placeholder"
              style={{ width: '100px', height: '30px' }}
            ></li>
            <li
              className="placeholder"
              style={{ width: '100px', height: '30px' }}
            ></li>
            <li
              className="placeholder points"
              style={{ width: '100px', height: '30px' }}
            ></li>

            <li
              className="placeholder settings"
              style={{ width: '100px', height: '30px' }}
            ></li>
          </ul>
        </Container>
      </>
    )
  }

  return (
    <>
      <Container>
        <ul>
          <li className="website">
            <ValorantGameLink />
          </li>

          <li className="clock">
            <ClockIconSvg width="18" height="18" />
            <span>1/2</span>
          </li>

          {data.map(category => {
            return (
              <li key={category.id} className={category.id}>
                <NavLink href={category.url}>{category.title}</NavLink>

                {category.id === 'play' ? (
                  <SvgPlay>
                    <MainNavCenterSvg width="354" height="55" />
                  </SvgPlay>
                ) : (
                  ''
                )}
              </li>
            )
          })}

          <li className="points">
            <div>
              <ValorantPointsSvg width="18" height="18" />
              <span>135</span>
            </div>
            <div>
              <RadiantPointsSvg width="18" height="18" />
              <span>60</span>
            </div>
          </li>

          <li className="settings" onClick={() => openModal(<ConfigDialog />)}>
            <GearConfig width="40px" height="40px" />
          </li>
        </ul>
      </Container>
    </>
  )
}
export default MainNav
