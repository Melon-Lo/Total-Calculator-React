import styled from 'styled-components'

import '../components/common/style.css'

import { nanoid } from 'nanoid'

// import img
import cross from 'assets/icons/cross.svg'

// import hook
import { useEffect, useContext } from 'react'

// import contexts
import { FunctionsContext } from 'contexts/FunctionsContext'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: green;
`

const TitleCollection = styled.div`
  width: 85%;
  height: 50px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const Title = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

const ItemCollection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Item = styled.div`
  width: 85%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: yellow;
`

const ItemPiece = styled.div`
  width: 25%;
  text-align: center;
`


export default function ItemBox() {
  const { currentItems } = useContext(FunctionsContext)

  const titleData = ['品項', '價格', '數量', '小計', '刪除']

  const titles = titleData.map(title => (
    <Title key={nanoid()}>
      {title}
    </Title>
  ))

  const itemsData = currentItems.map(item => (
    <Item key={nanoid()}>
      <ItemPiece>{item.name}</ItemPiece>
      <ItemPiece>{'$' + item.price}</ItemPiece>
      <ItemPiece>{'x' + item.amount}</ItemPiece>
      <ItemPiece>{'$' + item.price * item.amount}</ItemPiece>
      <ItemPiece>
        <img className="icon" src={cross} alt="cross" />
      </ItemPiece>
    </Item>
  ))

  return(
    <Container>
      <TitleCollection>
        {titles}
      </TitleCollection>
      <ItemCollection>
        {itemsData}
      </ItemCollection>
    </Container>
  )
}