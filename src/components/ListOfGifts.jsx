import React from 'react'
import { Center, Stack } from '@chakra-ui/react'
import GiftItem from './GiftItem'

export default function ListOfGifts ({ gifts, onDelete }) {
  return (
    <Stack px={2} marginY={2} maxW='540px' fontWeight={700}>
      <Stack p={2}>
        {
          gifts.map((gift) =>
            <div key={gift.id}>
              <GiftItem gift={gift} onDelete={onDelete} />
            </div>)
        }
      </Stack>
      <Center>Hay {gifts.length} {gifts.length === 1 ? 'regalo' : 'regalos'}</Center>
    </Stack>
  )
}
