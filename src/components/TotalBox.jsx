import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: pink;
  font-size: 1.2rem;
  font-weight: 800;
`

const TotalNumber = styled.div``

const SubmitButton = styled.button``

export default function TotalBox() {
  let total = 0
  const totalContent = `總價：${total}`
  const buttonContent = '確定'

  return(
    <Container>
      <TotalNumber>{totalContent}</TotalNumber>
      <SubmitButton>{buttonContent}</SubmitButton>
    </Container>
  )
}