import styled from 'styled-components'

// import components
import TitleBox from 'components/TitleBox'
import EditBox from 'components/EditBox'
import ItemBox from 'components/ItemBox'
import TotalBox from 'components/TotalBox'

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function MainPage() {
  const titleContent = '總價計算機'

  return (
    <Container>
      <TitleBox content={titleContent} />
      <EditBox />
      <ItemBox />
      <TotalBox />
    </Container>
  )
}