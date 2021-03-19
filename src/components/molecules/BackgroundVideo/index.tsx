import React, { useState } from 'react'
import {
  Container,
  BgVideo,
  BgPattern,
  PlayPanel,
  VideoSwitch,
  VideoSwictDot,
  VideoSwitchDesc
} from './Styles'
import VideoOnSVG from '@/svg/video-on.svg'
import VideoOffSVG from '@/svg/video-off.svg'
import { useBGVideoContext } from '@/context/BackgroundVideo'

const BackgroundVideo = () => {
  const { playVideo, setpLayVideo }: any = useBGVideoContext()

  const switchVideoPlayer = () => {
    return setpLayVideo(!playVideo)
  }

  return (
    <>
      <PlayPanel>
        {playVideo ? <VideoOnSVG /> : <VideoOffSVG />}
        <VideoSwitch onClick={switchVideoPlayer} data-active={playVideo}>
          <VideoSwictDot data-active={playVideo} />
          <VideoSwitchDesc data-active={playVideo}>
            {playVideo ? 'ON' : 'OFF'}
          </VideoSwitchDesc>
        </VideoSwitch>
      </PlayPanel>
      <Container data-active={playVideo}>
        <BgPattern />

        <BgVideo
          data-active={playVideo}
          preload="true"
          autoPlay
          muted
          loop
          poster="/img/valorant-launch.jpg"
          id="bgvid"
        >
          <source src="/videos/valorant-launch.webm" type="video/webm" />
          <source src="/videos/valorant-launch.mp4" type="video/mp4" />
        </BgVideo>
      </Container>
    </>
  )
}

export default BackgroundVideo
