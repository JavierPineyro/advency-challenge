import React from 'react'
import {
  FormControl, FormHelperText,
  Grid, Input, Stack
} from '@chakra-ui/react'

export default function Content () {
  return (
    <Grid minH='100vh' placeContent='center'>
      <Stack
        transition='filter .15s ease-in-out'
        filter='drop-shadow(0 0 15px rgb(150, 150, 20))'
        color='blackAlpha.800'
        direction='column' bg='whiteAlpha.900'
        p={12} borderRadius={30}
      >

        <FormControl>
          <Input placeholder='Fernet Branca​...' type='text' />
          <FormHelperText>Agrega más regalos!🎁</FormHelperText>
        </FormControl>
        <Stack fontWeight={700}>
          <ul>
            {
              STATE.map((item, index) => <li key={index}>{item}</li>
              )
            }
          </ul>
          <span>{STATE.length} elementos</span>
        </Stack>
      </Stack>
    </Grid>
  )
}
