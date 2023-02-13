import { useRef } from 'react'
import { Badge, Box, IconButton, Stack, Text, useDisclosure } from '@chakra-ui/react'

import IconGift from './IconGift'
import IconEdit from './IconEdit'
import IconDelete from './IconDelete'
import IconDouble from './IconDouble'
import { DeleteModal } from './DeleteModal'
import EditModal from './EditModal'
import { motion } from 'framer-motion'

export default function GiftItem ({ onEdit, gift, onDelete }) {
  const bgHoverColorGreen = { backgroundColor: '#88ff88aa' }
  const editRef = useRef(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit
  } = useDisclosure()

  return (
    <Stack
      as={motion.section}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      maxW='540px' spacing={{ xs: 4, sm: 6 }}
      display='flex' justifyContent='space-between'
      alignContent='center' direction='row' borderBottom='1px'
      borderBottomColor='gray.200'
    >
      <Stack alignItems='center' direction='row'>
        <Box minW={6} minH={6} w={6} h={6}>
          {gift.img && <a title={`ir a ${gift.product}`} href={gift.img} target='_blank' rel='noreferrer'><img src={gift.img} alt={gift.product} /></a>}
          {!gift.img && <IconGift />}
        </Box>
        <Text maxW={['140px', '250px']}>
          {gift.product}
          <Badge colorScheme='red' as='span'>x{gift.amount}</Badge>
          <Text as='span' marginLeft={1} py={1} fontSize='sm' lineHeight={0.7} fontWeight='light' color='gray.600'>
            {gift.name}
          </Text>
        </Text>
      </Stack>

      <EditModal gift={gift} onEdit={onEdit} isOpen={isOpenEdit} onClose={onCloseEdit} editRef={editRef} />
      <DeleteModal gift={gift} onDelete={onDelete} isOpen={isOpen} onClose={onClose} />

      <Stack paddingX={1} borderLeft='1px' borderLeftColor='gray.200' direction='row'>
        <IconButton _hover={bgHoverColorGreen} size='sm' onClick={onOpenEdit} icon={<IconEdit />} />
        <IconButton _hover={{ backgroundColor: '#ff8888cc' }} size='sm' onClick={onOpen} icon={<IconDelete />} />
        <IconButton title='No Funca ahora:/' _hover={bgHoverColorGreen} size='sm' icon={<IconDouble />} />
      </Stack>
    </Stack>
  )
}
