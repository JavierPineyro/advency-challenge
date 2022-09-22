/* global localStorage */
import { useEffect, useState } from 'react'

const KEY_VALUE = 'Gifts'

export const useStorage = (item = []) => {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    const isStoraged = getLocalStorage()
    !isStoraged && localStorage.setItem(KEY_VALUE, JSON.stringify(item))
  }, [])

  useEffect(() => {
    const fetchedData = JSON.parse(getLocalStorage())
    setGifts(fetchedData)
  }, [])

  const getLocalStorage = () => localStorage.getItem(KEY_VALUE)

  const setLocalStorage = (item) => {
    const fetchedData = JSON.parse(getLocalStorage())
    const dataToSave = [...fetchedData, item]
    localStorage.removeItem(KEY_VALUE)
    localStorage.setItem(KEY_VALUE, JSON.stringify(dataToSave))
    setGifts(dataToSave)
  }

  const editSingleLocalStorage = (gift) => {
    const fetchedData = JSON.parse(getLocalStorage())
    const mappedGifts = fetchedData.filter(item => item.id !== gift.id)
    deleteLocalStorage()
    localStorage.setItem(KEY_VALUE, JSON.stringify(mappedGifts))
    setGifts(mappedGifts)
  }

  const deleteLocalStorage = () => {
    localStorage.removeItem(KEY_VALUE)
    localStorage.setItem(KEY_VALUE, JSON.stringify([]))
    setGifts([])
  }

  return { gifts, deleteLocalStorage, editSingleLocalStorage, setLocalStorage }
}
