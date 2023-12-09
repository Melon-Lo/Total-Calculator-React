import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  font-size: 1.2rem;
  font-weight: 800;
`

export default function TitleBox({ content }) {
  return(
    <Container>{content}</Container>
  )
}