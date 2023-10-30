import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch("http://localhost:3000/transactions");
      const data = await response.json();
      setTransactions(data);
    }
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions}}>
      {children}
    </TransactionsContext.Provider>
  );
}
