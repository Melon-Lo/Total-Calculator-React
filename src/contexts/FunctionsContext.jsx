// import hook
import { useState, useEffect, createContext, useContext } from "react";

// import dependencies
import Swal from 'sweetalert2'

// import api
import { getItems, createItem, patchItem, deleteItem } from 'api/items'

// import context
import { ModeContext } from "./ModeContxt";
import { ModalContext } from "./ModalContext";

export const FunctionsContext = createContext()

export default function FunctionsContextProvider({ children }) {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputPriceValue, setInputPriceValue] = useState('')
  const [currentItems, setCurrentItems] = useState([])
  const { setShowModal } = useContext(ModalContext)
  const total = currentItems.reduce((acc, curr) => {
    return acc + curr.price * curr.amount
  }, 0)

  ////////// get items
  const getItemsAsync = async () => {
    try {
      const items = await getItems()
      setCurrentItems(items.map(item => ({...item})))
    } catch (error) {
      console.error(error)
    } 
  }

  ////////// add new item
  // name: 0-10 words
  const handleNameChange = (value) => {
    if(value.length > 10) return
    setInputNameValue(value.trim())
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
        amount: 1,
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
        timer: 1000,
        showConfirmButton: false
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

  ////////// patch item
  // amount of item +1 or -1
  const handleCalculation = async ({ id }, cal) => {
    const currentItem = currentItems.find(item => item.id === id)
    
    if(currentItem.amount + cal < 0) return
    
    try {
      await patchItem({
        id,
        amount: currentItem.amount + cal
      })
      
      setCurrentItems(prevItems => {
        return prevItems.map(item => {
          if(item.id === id) {
            return {
              ...item,
              amount: currentItem.amount + cal,
            }
          }
          return item
        })
      })
    } catch (error) {
      console.error(error)
    } 
  }

  ////////// delete item
  const handleDelete = async ({ id }) => {

    const result = await Swal.fire({
      icon: "warning",
      title: "確定要刪除嗎？",
      showCancelButton: true,
      confirmButtonColor: "#FF6600",
      confirmButtonText: "確定",
      cancelButtonText: "取消"
    })

    if(!result.isConfirmed) return

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
        handleCalculation,
        getItemsAsync,
        total,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  )
}