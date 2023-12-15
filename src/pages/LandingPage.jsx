import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

// import hook
import { useContext } from 'react'
import { ModeContext } from 'contexts/ModeContxt'

const Container = styled.div`
`

const PageButton = styled.button`
`

export default function LandingPage() {
  const navigate = useNavigate()
  const { setMode } = useContext(ModeContext)

  return (
    <Container>
      <PageButton
        onClick={() => {
          setMode('normal')
          navigate('/main')
        }}
      >
        一般模式
      </PageButton>
      <PageButton
        onClick={() => {
          setMode('server')
          navigate('/main')
        }}
      >
        伺服器模式
      </PageButton>
    </Container>
  )
}