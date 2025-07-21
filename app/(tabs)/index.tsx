import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../assets/styles/styles";


interface Conta {
  id: number;
  gasto: string;
  data: string;
  valor: number;
}

const Transactions = () => {
const contas: Conta[] = [
   {
    id: 1,
    gasto: "Salario",
    data: "10/01/2025",
    valor: 3650
   },
   {
    id: 2,
    gasto: "Faculdade",
    data: "15/01/2025",
    valor: 1200
   },
   {
    id: 3,
    gasto: "Marmita - Mensal",
    data: "01/01/2025",
    valor: 350
   },
   {
    id: 4,
    gasto: "Passagem - Viagem SP",
    data: "05/11/2025",
    valor: 800,
   },
   {
    id: 5,
    gasto: "Curso",
    data: "21/07/2025",
    valor: 1000
   }
]

    return (
        <SafeAreaView>
            {contas.map((item) => 
            <View key={item?.id} style={styles.container}>
                <View style={styles.container2}>
                    <Text>{item.data}</Text>
                    <Text>{item.gasto}</Text>
                </View>
                <Text>{item.valor}</Text>
            </View>
            )}
        </SafeAreaView>
    )
}

export default Transactions;