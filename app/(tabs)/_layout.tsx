import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../assets/styles/globalStyles";

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerStyle: { backgroundColor: colors.primary},
                    headerTintColor : colors.primaryContrast,
                    headerTitleAlign: "center",
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.inactive,
                    tabBarButton: (props: any) => <TouchableOpacity {...props} activeOpacity={0.8} />,
                    tabBarStyle:{
                        paddingTop: 5,
                        backgroundColor: colors.background
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
                        <View style={globalStyles.addButton}>
                            <MaterialIcons name="add" size={28} color={colors.primaryContrast} />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="summary-transations"
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