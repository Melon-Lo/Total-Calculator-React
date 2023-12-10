import styled from 'styled-components'
import '../components/common/style.css'
import cross from 'assets/icons/cross.svg'

// import hook
import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'
import { FunctionsContext } from 'contexts/FunctionsContext'

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
  border-radius: 15px 15px 0 0;
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
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ButtonSection = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
  border-radius: 15px;
`

const InputBox = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AddButton = styled.button`
  height: 30px;
`

const CrossIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`

export default function ModalBox() {
  const { inputNameValue, inputPriceValue, handleNameChange, handlePriceChange, handleAddItem } = useContext(FunctionsContext)

  const { setShowModal } = useContext(ModalContext)

  const title = '增加品項'
  const buttonContent = '增加'

  const inputNameTitle = '品項名稱'
  const inputNamePlaceholder = '10個字以內'
  const inputPriceTitle = '價格'
  const inputPricePlaceholder = '0-10000'

  return (
    <>
      <GrayBg />
      <Container>
        <Title>{title}</Title>
        <AddSection>
          <InputBox>
            <div className="inputTitle">
              {inputNameTitle}
            </div>
            <input 
              id="add-item-name-input"
              className="input" 
              type="text" 
              value={inputNameValue}
              placeholder={inputNamePlaceholder}
              onChange={(e) => {
                handleNameChange?.(e.target.value)
              }}
            />
          </InputBox>
          <InputBox>
            <div className="inputTitle">
              {inputPriceTitle}
            </div>
            <input 
              id="add-item-price-input"
              className="input" 
              type="number" 
              value={inputPriceValue}
              placeholder={inputPricePlaceholder}
              onChange={(e) => {
                handlePriceChange?.(e.target.value)
              }}
            />
          </InputBox>
        </AddSection>  
        <ButtonSection>
          <AddButton
            onClick={() => handleAddItem?.()}
          >
            {buttonContent}
          </AddButton>
        </ButtonSection>
        <CrossIcon
          onClick={() => setShowModal(false)}
        >
          <img className="icon" src={cross} alt="crossIcon" />
        </CrossIcon>
      </Container>
    </>
  )
}