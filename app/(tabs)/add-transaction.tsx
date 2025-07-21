import { globalStyles } from "@/assets/styles/globalStyles";
import Button from "@/components/Button";
import CategoryPicker from "@/components/CategoryPicker";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import DescriptionInput from "@/components/DescriptionInput";
import { categories } from "@/constants/categories";
import { MoneyContext } from "@/contexts/GlobalState";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useRef, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, TextInput, TouchableWithoutFeedback, View } from "react-native";


const AddTransactions = () => {
    
    interface Form {
        description: string;
        value: number;
        date: Date;
        category: string;
    }

    const initialForm: Form = {
        description: "",
        value: 0,
        date: new Date(),
        category: categories.income.name
    }

    const [form, setForm] = useState(initialForm)
    const [transactions, setTransactions] = useContext(MoneyContext);
    const valueInputRef = useRef<TextInput | null>(null);

    

    const setAsyncStorage = async (data: Form[]) => {
    try {
        await AsyncStorage.setItem("transactions", JSON.stringify(data))
    } catch (error){
        console.log(error)
    }
}

    const addingTransaction = async () => {
        const newTransaction = { id: transactions.length + 1, ...form}
        const updateTransactions = [...transactions, newTransaction]

        setTransactions(updateTransactions)
        setForm(initialForm)
        await setAsyncStorage(updateTransactions)

        Alert.alert("Transação adicionada com sucesso!")
    }

   

    return (
        <KeyboardAvoidingView style={globalStyles.screenContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={globalStyles.content}>
                    <View style={globalStyles.form}>
                        <DescriptionInput form={form} setForm={setForm} valueInputRef={valueInputRef}/>
                        <CurrencyInput form={form} setForm={setForm} valueInputRef={valueInputRef} />
                        <DatePicker form={form} setForm={setForm}/>
                        <CategoryPicker form={form} setForm={setForm}/>
                    </View>
                    <Button onPress={addingTransaction}>Adicionar</Button>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default AddTransactions;