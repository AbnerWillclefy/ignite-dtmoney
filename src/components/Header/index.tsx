import logo from '../../assets/logo.svg'
import { StyledContainer, StyledContent } from './styles'

export function Header() {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={logo} alt="dt money" />
        <button type="button">Nova transação</button>
      </StyledContent>
    </StyledContainer>
  )
}