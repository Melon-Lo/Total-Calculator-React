// import hook
import { useState, useEffect, createContext, useContext } from "react";

// import dependencies
import Swal from 'sweetalert2'

// import api
import { getItems, createItem, deleteItem } from 'api/items'

// import context
import { ModalContext } from "./ModalContext";

export const FunctionsContext = createContext()

export default function FunctionsContextProvider({ children }) {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputPriceValue, setInputPriceValue] = useState('')
  const [currentItems, setCurrentItems] = useState([])
  const { setShowModal } = useContext(ModalContext)

  ////////// get items
  const getItemsAsync = async () => {
    try {
      const items = await getItems()
      setCurrentItems(items.map(item => ({...item})))
      console.log(currentItems)
    } catch (error) {
      console.error(error)
    } 
  }

  ////////// add new item
  // name: 0-10 words
  const handleNameChange = (value) => {
    if(value.length > 10) return
    setInputNameValue(value)
  }

  // price: 0-10000
  const handlePriceChange = (value) => {
    setInputPriceValue(Math.min(value, 10000))
  }

  // submit
  const handleAddItem = async () => {
    // name & price can't be blank
    if(inputNameValue.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '品項名稱不能為空白！',
        timer: 1500
      })
      return
    }

    if(inputPriceValue.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '價格不能為空白！',
        timer: 1500
      })
      return
    }

    try {
      const data = await createItem({
        name: inputNameValue,
        price: inputPriceValue,
        amount: 0,
      })

      setCurrentItems(prevItems => {
        return [
          ...prevItems,
          {
            id: data.id,
            name: data.name,
            price: data.price,
            amount: data.amount,
          }
        ]
      })

      // success alert
      Swal.fire({
        icon: 'success',
        text: '新增成功！',
        timer: 1500
      })

      // clear data
      setInputNameValue('')
      setInputPriceValue('')
      setCurrentItems([])
      setShowModal(false)
      getItemsAsync()
    } catch (error) {
      console.error(error)
    }
  }

  ////////// delete item
  const handleDelete = async ({ id }) => {
    try {
      await deleteItem(id)
      setCurrentItems(prevItems => {
        return prevItems.filter(item => item.id !== id)
      })
    } catch (error) {
      console.error(error)
    } 
  }

  useEffect(() => {
    getItemsAsync()
  }, [])

  return (
    <FunctionsContext.Provider
      value={{
        inputNameValue,
        setInputNameValue,
        inputPriceValue,
        setInputPriceValue,
        currentItems,
        setCurrentItems,
        handleNameChange,
        handlePriceChange,
        handleAddItem,
        handleDelete,
        getItemsAsync,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  )
}