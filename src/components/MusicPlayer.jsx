import { useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import ReactHowler from 'react-howler'
import MutedIcon from './IconMuted'
import SoundIcon from './IconSound'

export default function MusicPlayer () {
  const [play, setPlay] = useState(false)
  const handleMusic = () => {
    setPlay(prev => !prev)
  }

  return (
    <>
      <IconButton
        title={play ? 'Parar Musica' : 'Reproducir Musica'}
        borderRadius='9999px'
        variant='outline' colorScheme='pink'
        onClick={handleMusic}
        icon={play ? <MutedIcon /> : <SoundIcon />}
      />
      <ReactHowler
        src='/advency-challenge/navidad.mp3'
        playing={play}
        mute={!play}
        volume={0.3}
        preload
        loop
      />
    </>
  )
}
