import React, { createContext, useState, useContext } from 'react'

const BGVideoContext = createContext({})

const BGVideoProvider = ({ children }) => {
  const [playVideo, setpLayVideo] = useState(true)

  return (
    <BGVideoContext.Provider
      value={{
        playVideo,
        setpLayVideo
      }}
    >
      {children}
    </BGVideoContext.Provider>
  )
}

const useBGVideoContext = () => {
  const context = useContext(BGVideoContext)
  return context
}

export { useBGVideoContext, BGVideoProvider }
