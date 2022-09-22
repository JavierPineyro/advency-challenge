import { Badge, Box, IconButton, Stack, Text } from '@chakra-ui/react'

import IconGift from './IconGift'
import IconEdit from './IconEdit'
import IconDelete from './IconDelete'
import IconDouble from './IconDouble'

export default function GiftItem ({ gift, onDelete }) {
  const bgHoverColorGreen = { backgroundColor: '#88ff88aa' }

  return (
    <Stack
      maxW='540px' spacing={6}
      display='flex' justifyContent='space-between'
      alignContent='center' direction='row' borderBottom='1px'
      borderBottomColor='gray.200'
    >
      <Stack direction='row'>
        <Box minW={6} minH={6} w={6} h={6}>
          {gift.img && <a title={`ir a ${gift.product}`} href={gift.img} target='_blank' rel='noreferrer'><img src={gift.img} alt={gift.product} /></a>}
          {!gift.img && <IconGift />}
        </Box>
        <Text>
          {gift.product} <Badge colorScheme='purple' as='span'>x{gift.amount}</Badge>
        </Text>
      </Stack>
      <Stack paddingX={1} borderLeft='1px' borderLeftColor='gray.200' direction='row'>
        <IconButton _hover={bgHoverColorGreen} size='sm' icon={<IconEdit />} />
        <IconButton _hover={{ backgroundColor: '#ff8888cc' }} onClick={() => onDelete(gift)} size='sm' icon={<IconDelete />} />
        <IconButton _hover={bgHoverColorGreen} size='sm' icon={<IconDouble />} />
      </Stack>
    </Stack>
  )
}
