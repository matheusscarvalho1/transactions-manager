import { globalStyles } from "@/assets/styles/globalStyles"
import { categories } from "@/constants/categories"
import { Text, View } from "react-native"
import CategoryItem from "./CategoryItem"

type CategoryType = "income" | "food" | "house" | "education" | "travel"

type TransactionItemProps = {
  category: CategoryType
  date: string
  description: string
  value: number
}


const TransactionItem = ({ category, date, description, value }: TransactionItemProps) => {

  const valueStyle = category === categories.income.name 
    ? globalStyles.positiveText
    : globalStyles.negativeText

  return (
    <View style={globalStyles.itemContainer}>
      <CategoryItem category={category} />
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.secondaryText}>{new Date(date).toLocaleDateString("pt-BR")}</Text>
        <View style={globalStyles.bottomLineContainer}>
          <Text style={globalStyles.primaryText}>{description}</Text>
          <Text style={valueStyle}>{value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</Text>
        </View>
      </View>
    </View>
  )
}

export default TransactionItem
