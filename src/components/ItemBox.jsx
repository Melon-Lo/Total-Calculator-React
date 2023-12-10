import styled from 'styled-components'

import { nanoid } from 'nanoid'

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
  justify-content: space-around;
  align-items: center;
  background: yellow;
`

const ItemName = styled.div``
const ItemPrice = styled.div``
const ItemAmount = styled.div``
const ItemTotal = styled.div``

export default function ItemBox({ items }) {
  const titleData = ['品項', '價格', '數量', '小計']

  const titles = titleData.map(title => (
    <Title key={nanoid()}>
      {title}
    </Title>
  ))

  const itemsData = items.map(item => (
    <Item key={nanoid()}>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>{'$' + item.price}</ItemPrice>
      <ItemAmount>{'x' + item.amount}</ItemAmount>
      <ItemTotal>{'$' + item.price * item.amount}</ItemTotal>
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