import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const MoneyContext = createContext();

const GlobalState = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //AsyncStorage.clear()
    const getAsyncStorage = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem("transactions");
        if (storedTransactions) {
          setTransactions(JSON.parse(storedTransactions));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); 
      }
    };

    getAsyncStorage();
  }, []);

  if (isLoading) return null;

  return (
    <MoneyContext.Provider value={[transactions, setTransactions]}>
      {children}
    </MoneyContext.Provider>
  );
};

export default GlobalState;
