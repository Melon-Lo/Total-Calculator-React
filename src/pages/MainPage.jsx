import styled from 'styled-components'

// import components
import TitleBox from 'components/TitleBox'
import EditBox from 'components/EditBox'
import ItemBox from 'components/ItemBox'
import TotalBox from 'components/TotalBox'

// import hook
import { useState, useEffect, useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext' 

import ModalBox from 'components/ModalBox'

const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function MainPage() {
  const { showModal } = useContext(ModalContext)
  const titleContent = '總價計算機'

  return (
    <Container>
      <TitleBox content={titleContent} />
      <EditBox />
      <ItemBox />
      <TotalBox />
      { showModal && <ModalBox /> }
    </Container>
  )
}