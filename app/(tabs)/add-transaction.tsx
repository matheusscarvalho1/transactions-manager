import { globalStyles } from "@/assets/styles/globalStyles";
import Button from "@/components/Button";
import CategoryPicker from "@/components/CategoryPicker";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import DescriptionInput from "@/components/DescriptionInput";
import { useRef, useState } from "react";
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
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)
    const valueInputRef = useRef<TextInput | null>(null);

    const addTransactions = () => {
        Alert.alert(`${form.description} / ${form.date} / ${form.value} / ${form.category}`)
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
                    <Button onPress={addTransactions}>Adicionar</Button>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default AddTransactions;