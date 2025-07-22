import { colors } from "@/constants/colors";
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
        },
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 4
        },
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    paddingVertical: 8
  },
  bottomLineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  line: {
    backgroundColor: colors.secondaryText,
    height: 1,
    opacity: 0.5,
    marginBottom: 4
  },
  primaryText: {
    fontSize: 16,
    color: colors.primaryText
  },
  secondaryText: {
    fontSize: 12,
    color: colors.secondaryText
  },
  positiveText: {
    fontSize: 16,
    color: colors.positiveText
  },
  negativeText: {
    fontSize: 16,
    color: colors.negativeText
  },
  balance: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  balanceText: {
    fontSize: 18,
    color: colors.primaryText,
    fontWeight: 800
  }


})