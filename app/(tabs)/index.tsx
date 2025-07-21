import { MoneyContext } from "@/contexts/GlobalState";
import { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




const Transactions = () => {
    const [transactions] = useContext(MoneyContext)

    return (
        <SafeAreaView>
            {/* {contas.map((item) => 
            <View key={item?.id} style={globalStyles.container}>
                <View style={globalStyles.container2}>
                    <Text>{item.data}</Text>
                    <Text>{item.gasto}</Text>
                </View>
                <Text>{item.valor}</Text>
            </View>
            )} */}
            <Text>
                {transactions[0]?.description}
            </Text>
        </SafeAreaView>
    )
}

export default Transactions;