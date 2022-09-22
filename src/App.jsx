import { Box, Button, Container, Grid, Heading, Stack, Text } from '@chakra-ui/react'

import Form from './components/Form'
import ListOfGifts from './components/ListOfGifts'
import { useStorage } from './hooks/useStorage'

function App () {
  const { gifts, setLocalStorage, editSingleLocalStorage, deleteLocalStorage } = useStorage()
  return (
    <Box
      w='100vw'
      as='main'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      bgSize='cover'
      backgroundImage="url('/navidad-bg¿.webp')"
    >
      <Container maxH='100vh' maxW='container.sm' className='App'>
        <Grid height='100vh' placeContent='center'>
          <Stack
            as='article'
            transition='filter .15s ease-in-out'
            filter='drop-shadow(0 0 15px rgb(150, 150, 20))'
            color='blackAlpha.800' direction='column'
            // bg='whiteAlpha.900'
            bg='gray.100'
            p={8} borderRadius={20}
            maxH='90vh' minW='450px' overflowX='hidden'
          >
            <Heading
              bgGradient='linear(to-l, pink.500, #FF0080)'
              bgClip='text'
              fontSize='4xl'
              fontWeight='extrabold'
              textAlign='center'
            >Advency
            </Heading>
            <Form setGifts={setLocalStorage} />
            {
            gifts.length !== 0
              ? <ListOfGifts onDelete={editSingleLocalStorage} gifts={gifts} />
              : <Text textAlign='center' fontWeight='bold'>Agrega más regalos! 🎁</Text>
            }
            <Box display='flex' justifyContent='center'>
              <Button
                colorScheme='pink'
                variant='solid'
                onClick={deleteLocalStorage}
              >
                Borrar Todos :/
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

export default App
