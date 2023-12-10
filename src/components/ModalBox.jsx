import styled from 'styled-components'
import '../components/common/style.css'
import cross from 'assets/icons/cross.svg'

// import hook
import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'

// when showing modal, there's gray background
const GrayBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  z-index: 4;
`

const Container = styled.div`
  position: absolute;
  width: 80%;
  height: 200px;
  background: brown;
  border-radius: 15px;
  z-index: 999;
`

const Title = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;

`

const AddSection = styled.div`
  background: gray;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const AddButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

const CrossIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`

export default function ModalBox({ 
  handleNameChange,
  handlePriceChange, 
  handleAddItem,
}) {
  const { setShowModal } = useContext(ModalContext)

  const title = '增加品項'
  const buttonContent = '增加'

  return (
    <>
      <GrayBg />
      <Container>
        <Title>{title}</Title>
        <AddSection>
          <input 
            id="add-item-name-input"
            className="input" 
            type="text" 
            placeholder="品項名稱" 
            onChange={(e) => {
              handleNameChange?.(e.target.value)
            }}
          />
          <input 
            id="add-item-price-input"
            className="input" 
            type="number" 
            placeholder="價格"
            onChange={(e) => {
              handlePriceChange?.(e.target.value)
            }}
          />
        </AddSection>
        <AddButton
          onClick={() => handleAddItem?.()}
        >
          {buttonContent}
        </AddButton>
        <CrossIcon
          onClick={() => setShowModal(false)}
        >
          <img className="icon" src={cross} alt="crossIcon" />
        </CrossIcon>
      </Container>
    </>
  )
}