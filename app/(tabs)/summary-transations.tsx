import { globalStyles } from "@/assets/styles/globalStyles";
import SummaryItem from "@/components/SummaryItem";
import { categories } from "@/constants/categories";
import { MoneyContext } from "@/contexts/GlobalState";
import { useContext, useMemo } from "react";
import { Text, View } from "react-native";

// const example = {
//     id: 1,
//     category: "food",
//     date: "December 17, 1995 03:24:00",
//     description: "Marmita",
//     value: 50.01
// }

type CategoryKey = 'income' | 'food' | 'education' | 'house' | 'travel';

const SumaryTransactions = () => {
const [transactions] = useContext(MoneyContext)

const getTotals = () => {
      const totals: Record<CategoryKey | 'sum', number> = {
      sum: 0,
      income: 0,
      food: 0,
      education: 0,
      house: 0,
      travel: 0,
    };

   for(let i = 0; i < transactions.length; i++){
        const item = transactions[i]

        const category = item.category as CategoryKey;

        if (category in totals) {
            totals[category] += item.value;
        }

        if (item.category === categories.income.name) {
            totals.sum += item.value
        } else {
            totals.sum -= item.value
        }
   }
   return totals
}

    const totals = useMemo(getTotals, [transactions])
    // Essa função irá rodar toda vez que meu componente re-renderizar, eu não quero isso, eu só quero que calcule denovo esse valor quando a lista de 'transactions' mudar
    // para isso vamos guardar o valor total no useMemo acima.

    const valueStyle = 
        totals.sum > 0 
            ? globalStyles.positiveText 
            : globalStyles.negativeText

    return (
        <View style={globalStyles.screenContainer}>
            <View style={globalStyles.content}>
            <SummaryItem 
                category={categories.income.name} 
                value={totals[categories.income.name]}
            />
            <SummaryItem 
                category={categories.food.name} 
                value={totals[categories.food.name]}
            />
            <SummaryItem 
                category={categories.house.name} 
                value={totals[categories.house.name]}
            />
            <SummaryItem 
                category={categories.education.name} 
                value={totals[categories.education.name]}
            />
            <SummaryItem 
                category={categories.travel.name} 
                value={totals[categories.travel.name]}
            />
            <View style={globalStyles.line}/>
            <View style={globalStyles.balance}>
                <Text style={globalStyles.balanceText}>Saldo</Text>
                <Text style={valueStyle}>{totals.sum.toLocaleString("pt-BR", { style:  "currency", currency: "BRL"})}</Text>
            </View>
            </View>
        </View>
    )
}

export default SumaryTransactions;