import { useRef } from 'react'
import Snowfall from 'react-snowfall'
import { motion, AnimatePresence } from 'framer-motion'
import { useStorage } from './hooks/useStorage'
import {
  Box,
  Button,
  Center,
  Container,
  Grid, Heading,
  Stack, Text,
  useDisclosure
} from '@chakra-ui/react'

import './app.css'
import FormModal from './components/FormModal'
import ListOfGifts from './components/ListOfGifts'
import MusicPlayer from './components/MusicPlayer'

function App () {
  const {
    gifts,
    setStorage,
    editItem,
    deleteItem,
    deleteAll
  } = useStorage()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)

  return (
    <Box
      w='100vw'
      minW='100%'
      as='main'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      bgSize='cover' position='relative'
      backgroundImage="url('/advency-challenge/navidad-bg-compressed.jpg')"
    >
      <Snowfall snowflakeCount={45} />
      <Container maxH='100vh' maxW={['container.xs', 'container.sm']} className='App'>
        <Grid height='100vh' placeContent='center'>
          <AnimatePresence key='ArticleFakeId'>
            <Stack
              as={motion.article}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition='filter .15s ease-in-out'
              filter='drop-shadow(0 0 15px rgb(150, 150, 20))'
              color='blackAlpha.800' direction='column'
              bg='gray.100'
              p={[2, 8]} borderRadius={20}
              maxH='90vh' minW='400px' overflowX='hidden'
            >
              <Stack direction='row'>
                <Heading
                  flex={1}
                  bgGradient='linear(to-l, green.600, green)'
                  bgClip='text'
                  fontSize='4xl'
                  fontWeight='extrabold'
                  textAlign='center'
                  as='header'
                >Advency
                </Heading>
                <Box position='absolute'>
                  <MusicPlayer />
                </Box>
              </Stack>
              <Button
                colorScheme='green' minH='35px'
                variant='solid' onClick={onOpen}
              >Agregar Regalo
              </Button>
              <FormModal
                isOpen={isOpen} initialRef={initialRef}
                onClose={onClose} setGifts={setStorage}
              />
              {
            gifts.length !== 0
              ? <ListOfGifts onEdit={editItem} onDelete={deleteItem} gifts={gifts} />
              : <Text fontSize='sm' color='gray.600' textAlign='center' fontWeight='semibold'>No hay nada ... 🎁</Text>
            }
              <Box display='flex' justifyContent='center'>
                <Button
                  colorScheme='green'
                  variant='solid'
                  onClick={deleteAll}
                >
                  Borrar Todos :/
                </Button>
              </Box>
            </Stack>
          </AnimatePresence>
          <Center paddingTop={15}>
            <Text backgroundColor='#222e' borderRadius='sm' fontWeight='extrabold' fontSize={14} color='whiteAlpha.900'>
              Hecho por Javier Piñeyro💙🧑‍💻
            </Text>
          </Center>
        </Grid>
      </Container>
    </Box>
  )
}

export default App
