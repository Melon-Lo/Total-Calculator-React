import styled from 'styled-components'

import dummyData from 'data/dummyData'

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

export default function ItemBox() {
  const titleData = ['品名', '價格', '數量', '小計']

  const titles = titleData.map(title => (
    <Title>{title}</Title>
  ))

  const items = dummyData.map(item => (
    <Item>
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
        {items}
      </ItemCollection>
    </Container>
  )
}