import React from 'react'
import { Center, Stack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import GiftItem from './GiftItem'

export default function ListOfGifts ({ gifts, onDelete, onEdit }) {
  return (
    <Stack px={2} marginY={{ sm: '2px', xs: '6px' }} minW={['300px', '400px']} maxW='540px' fontWeight={700}>
      <Stack p={2}>
        <AnimatePresence>
          {
          gifts.map((gift) =>
            <GiftItem key={gift.id} onEdit={onEdit} gift={gift} onDelete={onDelete} />
          )
        }
        </AnimatePresence>
      </Stack>
      <Center>Hay {gifts.length} {gifts.length === 1 ? 'regalo' : 'regalos'}</Center>
    </Stack>
  )
}
