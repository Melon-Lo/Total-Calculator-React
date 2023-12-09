import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: blue;
`

const AddItem = styled.button``

const EditItem = styled.button``

const DeleteItem = styled.button``

export default function EditBox() {
  const addContent = '增加'
  const editContent = '修改'
  const deleteContent = '刪除'

  return(
    <Container>
      <AddItem>{addContent}</AddItem>
      <EditItem>{editContent}</EditItem>
      <DeleteItem>{deleteContent}</DeleteItem>
    </Container>
  )
}