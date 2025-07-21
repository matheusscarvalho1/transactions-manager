import { globalStyles } from "@/assets/styles/globalStyles";
import TransactionItem from "@/components/TransactionItem";
import { MoneyContext } from "@/contexts/GlobalState";
import { useContext } from "react";
import { FlatList, Text, View } from "react-native";




const Transactions = () => {
    const [transactions] = useContext(MoneyContext)

    return (
        <View style={globalStyles.screenContainer}>
            <FlatList
            data={transactions}
            renderItem={({ item }) => <TransactionItem {...item} />}
            ListEmptyComponent={<Text style={globalStyles.secondaryText}>Ainda não há nenhum item adicionado.</Text>}
            style={globalStyles.content}
            />
        </View>
    )
}

export default Transactions;