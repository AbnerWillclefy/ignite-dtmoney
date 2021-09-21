import incomeImg from '../../assets/income.svg'
import outgoingImg from '../../assets/outgoing.svg'
import totalImg from '../../assets/total.svg'

import { StyledContainer } from "./styles";

export function Summary() {
  return (
    <StyledContainer>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outgoingImg} alt="Saídas" />
        </header>
        <strong> -R$500,00</strong>
      </div>
      <div className='highlighted-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </StyledContainer>
  )
}