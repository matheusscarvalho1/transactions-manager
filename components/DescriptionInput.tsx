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
  valueInputRef?: React.RefObject<TextInput | null>;
}

const DescriptionInput = ({ form, setForm, valueInputRef }: CurrencyInputProps) => {
  return (
    <View>
      <Text style={globalStyles.inputLabel}>Descrição</Text>
        <TextInput
          value={form.description}
          returnKeyType="next"
          onChangeText={(text) => setForm({ ...form, description: text }) }
          style={globalStyles.input}
          onSubmitEditing={() => valueInputRef?.current?.focus()}
        />
      </View>
  );
};

export default DescriptionInput;
