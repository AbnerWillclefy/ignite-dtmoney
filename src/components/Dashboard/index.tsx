import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { StyledContainer } from "./styles";

export function Dashboard() {
  return (
    <StyledContainer>
      <Summary />
      <TransactionTable />
    </StyledContainer>
  )
}