import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

export function DeleteModal ({ isOpen, onClose, onDelete, gift }) {
  const handleDelete = () => {
    onDelete(gift)
    onClose()
  }
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Borrar Regalo🎁</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          ¿Estás seguro de querer borrar el regalo?
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleDelete} colorScheme='pink'>Borrar</Button>
          <Button variant='ghost' ml={3} onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
