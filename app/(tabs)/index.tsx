import { globalStyles } from "@/assets/styles/globalStyles";
import TransactionItem from "@/components/TransactionItem";
import { MoneyContext } from "@/contexts/GlobalState";
import { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";



type Transaction = {
  id: number ;
  category: string;
  value: number;
  description?: string;
  date?: string;
}

const Transactions = () => {
    const [transactions, setTransactions] = useContext(MoneyContext)

    return (
        <GestureHandlerRootView>
            <View style={globalStyles.screenContainer}>
                <FlatList
                data={transactions}
                renderItem={({ item }) => (
                <TransactionItem {...item} 
                    deleteTransaction={() => setTransactions(transactions.filter(transaction => transaction.id !== item.id))} 
                />
            )}
                ListEmptyComponent={<Text style={globalStyles.secondaryText}>Ainda não há nenhum item adicionado.</Text>}
                style={globalStyles.content}
                />
            </View>
        </GestureHandlerRootView>
    )
}

export default Transactions;