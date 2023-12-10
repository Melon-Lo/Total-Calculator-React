import styled from 'styled-components'

// import hook
import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: blue;
`

const AddItem = styled.button``

export default function EditBox() {
  const { setShowModal } = useContext(ModalContext)
  const addContent = '增加品項'

  return(
    <Container>
      <AddItem
        onClick={() => setShowModal(true)}
      >
        {addContent}
      </AddItem>
    </Container>
  )
}