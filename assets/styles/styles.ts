import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        padding: 10
    },

    container2: {
        display: "flex",
        flexDirection: "column",
        gap: 2

    },
    
    addButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 35,
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: Colors.primary

    }
    
})

export default styles;