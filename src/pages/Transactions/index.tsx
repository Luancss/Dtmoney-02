import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionTable,
  TransactionsContainer,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Summary } from "../../components/Summary";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
