import { Feather, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerStyle: { backgroundColor: "green"},
                    headerTintColor : "#FFF",
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "gray",
                }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Transações",
                    tabBarIcon: ({ color }) => <Feather name="dollar-sign" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="new-transaction"
                options={{
                    title: "Adicionar Transação",
                    tabBarIcon: ({ color }) => <FontAwesome size={29} name="plus-circle" color={color} />
                }}
            />
            <Tabs.Screen
                name="sumary-transations"
                options={{
                    title: "Resumo",
                    tabBarIcon: ({ color }) => <FontAwesome size={29} name="pie-chart" color={color} />
                }}
            />
            </Tabs>
        </>
    )

}
export default TabsLayout;