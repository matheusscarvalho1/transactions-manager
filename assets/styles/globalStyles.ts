import { colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create ({
    screenContainer: {
        display: "flex",
        flex: 1 // Ocupa o espaço inteiro da tela, para termos a tela toda ocupada
    },
    content: {
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    input: {
        height: 40,
        paddingHorizontal: 16,
        borderColor: colors.secondaryText,
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1
    },
    inputLabel: {
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 4
    },
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
        backgroundColor: colors.primary
    },
    background: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 44,
        borderRadius: 8,
        backgroundColor: colors.primary
    },
    text: {
        color: colors.primaryContrast,
        fontSize: 18,
        fontWeight: 600
    },
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10 
    },
    picker: {
        display: "flex",
        justifyContent: "center",
        height: 44,
        borderColor: colors.secondaryText,
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1
    }

})