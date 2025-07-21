import { globalStyles } from "@/assets/styles/globalStyles";
import { Text, TextInput, View } from "react-native";

interface Form {
  description: string;
  value: number;
  date: Date;
  category: string;
}

interface CurrencyInputProps {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  valueInputRef: React.RefObject<TextInput | null>;
}

const CurrencyInput = ({ form, setForm, valueInputRef }: CurrencyInputProps) => {
  const handleCurrencyChange = (text: string) => {
    const formattedValue = text.replace(/\D/g, "");
    const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0;
    setForm({ ...form, value: numberValue });
  };

  return (
    <View>
      <Text style={globalStyles.inputLabel}>Valor</Text>
      <TextInput
        value={form.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        ref={valueInputRef}
        onChangeText={handleCurrencyChange}
        keyboardType="numeric"
        style={globalStyles.input}
        returnKeyType="next"
      />
    </View>
  );
};

export default CurrencyInput;
