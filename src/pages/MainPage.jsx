import styled from 'styled-components'

// import components
import TitleBox from 'components/TitleBox'
import EditBox from 'components/EditBox'
import ItemBox from 'components/ItemBox'
import TotalBox from 'components/TotalBox'

// import hook
import { useState, useEffect, useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'

// import api
import { getItems, createItem } from 'api/items'
import ModalBox from 'components/ModalBox'

const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function MainPage() {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputPriceValue, setInputPriceValue] = useState('')
  const [items, setItems] = useState([])
  const { showModal, setShowModal } = useContext(ModalContext)
  const titleContent = '總價計算機'

  const handleNameChange = (value) => {
    setInputNameValue(value)
  }

  const handlePriceChange = (value) => {
    setInputPriceValue(value)
  }

  const handleAddItem = async () => {
    if(inputNameValue.length === 0 || inputPriceValue.length === 0) return

    try {
      const data = await createItem({
        name: inputNameValue,
        price: inputPriceValue,
        amount: 0,
      })

      console.log(data)

      setItems(prevItems => {
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

      setInputNameValue('')
      setInputPriceValue('')
      setShowModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getItemsAsync = async () => {
      try {
        const items = await getItems()
        setItems(items.map(item => ({...item})))
      } catch (error) {
        console.error(error)
      } 
    }

    getItemsAsync()
  }, [])

  return (
    <Container>
      <TitleBox 
        content={titleContent} 
      />
      <EditBox 
      />
      <ItemBox 
        items={items} 
      />
      <TotalBox />

      { showModal && 
        <ModalBox 
          handleNameChange={handleNameChange}
          handlePriceChange={handlePriceChange}
          handleAddItem={handleAddItem}
        /> 
      }
    </Container>
  )
}