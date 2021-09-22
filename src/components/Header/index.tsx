import logo from '../../assets/logo.svg'
import { StyledContainer, StyledContent } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </StyledContent>
    </StyledContainer>
  )
}