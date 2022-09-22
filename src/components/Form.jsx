/* global crypto */
import { useState } from 'react'
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button
} from '@chakra-ui/react'
import IconInput from './IconInput'

const INITIAL_STATE = {
  product: '',
  amount: 1,
  img: ''
}

export default function Form ({ setGifts }) {
  const [input, setInput] = useState(INITIAL_STATE)
  const colorFill = input.product !== '' ? '#ff0' : 'none'

  const handleChangeProduct = (evt) => {
    setInput({ ...input, product: evt.target.value })
  }
  const handleChangeAmount = (evt) => {
    const amountOfProduct =
      evt.target.value === '0' ? 1 : evt.target.value
    setInput({ ...input, amount: amountOfProduct })
  }
  const handleChangeImage = (evt) => {
    setInput({ ...input, img: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const newGift = {
      id: crypto.randomUUID(),
      product: input.product,
      amount: input.amount,
      img: input.img
    }
    setGifts(newGift)
    setInput({ product: '', amount: 1, img: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Stack
          marginY={2} alignContent='center' display='flex'
          flexDirection='row' justifyContent='space-evenly'
        >
          <InputGroup marginTop='0.5rem' maxW='60%'>
            <InputLeftElement>
              <IconInput colorFill={colorFill} />
            </InputLeftElement>
            <Input
              isRequired bg='whiteAlpha.600'
              autoComplete='off'
              onChange={handleChangeProduct} value={input.product}
              variant='outline' placeholder='Fernet Branca ​...' type='text'
            />
          </InputGroup>
          <InputGroup maxW='10%'>
            <Input
              isRequired bg='whiteAlpha.600'
              variant='outline'
              type='number' placeholder='0...' autoComplete='off'
              size='md' min={1} onChange={handleChangeAmount} value={input.amount}
            />
          </InputGroup>

          <InputGroup marginTop='0.5rem' maxW='60%'>
            <Input
              autoComplete='off' onChange={handleChangeImage}
              value={input.img} bg='whiteAlpha.600'
              variant='outline' placeholder='https://...' type='url'
            />
          </InputGroup>

          <Button colorScheme='pink' type='submit'>+</Button>
        </Stack>
      </FormControl>
    </form>
  )
}
