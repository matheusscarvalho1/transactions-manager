import { globalStyles } from "@/assets/styles/globalStyles"
import { categories } from "@/constants/categories"
import { Text, View } from "react-native"
import CategoryItem from "./CategoryItem"

type CategoryType = "income" | "food" | "house" | "education" | "travel"

type SummaryItemProps = {
  category: CategoryType
  value: number
}


const SummaryItem = ({ category, value }: SummaryItemProps) => {

  const valueStyle = category === categories.income.name 
    ? globalStyles.positiveText
    : globalStyles.negativeText

  return (
    <>
      <View style={globalStyles.itemContainer}>
        <CategoryItem category={category} />
        <View style={globalStyles.textContainer}>
          <Text style={globalStyles.primaryText}>{categories[category].displayName}</Text>
          </View>
          <Text style={valueStyle}>{value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</Text>
        </View>
    </>
  )
}

export default SummaryItem
