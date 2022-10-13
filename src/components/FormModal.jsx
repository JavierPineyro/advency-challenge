/* global crypto */
import { useState } from 'react'
import IconInput from './IconInput'
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  ModalFooter,
  FormLabel,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Modal,
  Box,
  Stack
} from '@chakra-ui/react'

const INITIAL_STATE = {
  product: '',
  amount: 1,
  img: '',
  name: ''
}

export default function FormModal ({ setGifts, onClose, initialRef, isOpen }) {
  const [input, setInput] = useState(INITIAL_STATE)
  const colorFill = input.product !== '' ? '#ff0' : 'none'

  const handleChangeProduct = (evt) => {
    setInput({ ...input, product: evt.target.value })
  }
  const handleChangeName = (evt) => {
    setInput({ ...input, name: evt.target.value })
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
      name: input.name,
      amount: input.amount,
      img: input.img
    }
    setGifts(newGift)
    setInput({ product: '', amount: 1, img: '', name: '' })
    onClose()
  }

  return (
    <Modal
      size='xs'
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <ModalHeader textAlign='center'>Agrega un regalo!🎁</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Stack spacing={4} direction='column'>
                <Box>
                  <FormLabel>Producto</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <IconInput colorFill={colorFill} />
                    </InputLeftElement>
                    <Input
                      ref={initialRef} isRequired autoComplete='off'
                      onChange={handleChangeProduct} value={input.product}
                      placeholder='Fernet Branca ​...' type='text'
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel>Para: </FormLabel>
                  <InputGroup>
                    <Input
                      isRequired autoComplete='off'
                      onChange={handleChangeName} value={input.name}
                      placeholder='Pepito ​...' type='text'
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel>Cantidad</FormLabel>
                  <InputGroup>
                    <Input
                      isRequired type='number' placeholder='0...'
                      autoComplete='off' size='md' min={1}
                      onChange={handleChangeAmount} value={input.amount}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel>Link Imagen</FormLabel>
                  <InputGroup>
                    <Input
                      autoComplete='off' onChange={handleChangeImage}
                      value={input.img} placeholder='https://...' type='url'
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} colorScheme='pink' type='submit'>Agregar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </FormControl>
        </form>
      </ModalContent>
    </Modal>
  )
}
