/* global localStorage */
import { useEffect, useState } from 'react'

const KEY_VALUE = 'Gifts'

export const useStorage = (item = []) => {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    const isStoraged = getStorage()
    !isStoraged && localStorage.setItem(KEY_VALUE, JSON.stringify(item))
  }, [])

  useEffect(() => {
    const fetchedData = JSON.parse(getStorage())
    setGifts(fetchedData)
  }, [])

  const getStorage = () => localStorage.getItem(KEY_VALUE)

  const setStorage = (item) => {
    const fetchedData = JSON.parse(getStorage())
    const dataToSave = [...fetchedData, item]
    deleteAll()
    localStorage.setItem(KEY_VALUE, JSON.stringify(dataToSave))
    setGifts(dataToSave)
  }

  const editItem = (gift) => {
    const data = JSON.parse(getStorage())
    const mappedData = data.map((item) =>
      gift.id === item.id
        ? {
            id: gift.id,
            product: gift.product,
            amount: Number(gift.amount),
            img: gift.img,
            name: gift.name
          }
        : item
    )
    deleteAll()
    localStorage.setItem(KEY_VALUE, JSON.stringify(mappedData))
    setGifts(mappedData)
  }

  const deleteItem = (gift) => {
    const fetchedData = JSON.parse(getStorage())
    const mappedGifts = fetchedData.filter(item => item.id !== gift.id)
    deleteAll()
    localStorage.setItem(KEY_VALUE, JSON.stringify(mappedGifts))
    setGifts(mappedGifts)
  }

  const deleteAll = () => {
    localStorage.removeItem(KEY_VALUE)
    localStorage.setItem(KEY_VALUE, JSON.stringify([]))
    setGifts([])
  }

  return {
    gifts,
    editItem,
    deleteAll,
    deleteItem,
    setStorage
  }
}
