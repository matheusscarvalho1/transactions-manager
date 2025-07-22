import { globalStyles } from "@/assets/styles/globalStyles";
import { categories } from "@/constants/categories";
import { useRef } from "react";
import { Animated, Text, View } from "react-native";
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import CategoryItem from "./CategoryItem";

type CategoryType = "income" | "food" | "house" | "education" | "travel"

type TransactionItemProps = {
  category: CategoryType
  date: string
  description: string
  value: number
  deleteTransaction: () => void
}

const TransactionItem = ({ category, date, description, value, deleteTransaction }: TransactionItemProps) => {

  const swipe = useRef(new Animated.Value(0)).current;

  const handleFling = (event: any) => {
    if  (event.nativeEvent.state === State.ACTIVE){
      Animated.spring(swipe, {
        toValue: 500,
        useNativeDriver: true,
        stiffness: 80,
        damping: 15,
        mass: 1,
      }).start(() => deleteTransaction());
    }
  }

  const valueStyle = category === categories.income.name 
    ? globalStyles.positiveText
    : globalStyles.negativeText

  return (
    <FlingGestureHandler direction={Directions.RIGHT} onHandlerStateChange={handleFling}>
      <Animated.View style={[{ transform: [{ translateX: swipe }] }]}>
        <View>
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
          <View style={globalStyles.line} />
        </View>
      </Animated.View>
    </FlingGestureHandler>
  )
}

export default TransactionItem
