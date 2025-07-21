import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/styles";

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary},
                    headerTintColor : Colors.primaryContrast,
                    headerTitleAlign: "center",
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.inactive,
                    tabBarButton: (props: any) => <TouchableOpacity {...props} activeOpacity={0.8} />,
                    tabBarStyle:{
                        paddingTop: 5,
                        backgroundColor: Colors.background
                    }
                }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Transações",
                    tabBarIcon: ({ color }) => <MaterialIcons name="attach-money" size={28} color={color} />
                }}
            />
            <Tabs.Screen
                name="add-transaction"
                options={{
                    title: "Adicionar Transação",
                    tabBarLabel: "",
                    tabBarIcon: () => (
                        <View style={styles.addButton}>
                            <MaterialIcons name="add" size={28} color={Colors.primaryContrast} />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="sumary-transations"
                options={{
                    title: "Resumo",
                    tabBarIcon: ({ color }) => <MaterialIcons name="pie-chart" size={28} color={color} />
                }}
            />
            </Tabs>
        </>
    )

}
export default TabsLayout;