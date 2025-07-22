import { globalStyles } from "@/assets/styles/globalStyles";
import { categories } from "@/constants/categories";
import { Picker } from '@react-native-picker/picker';
import { Text, View } from "react-native";

interface Form {
  description: string;
  value: number;
  date: Date;
  category: string;
}

interface CategoryPickerProps {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
}

const CategoryPicker = ({ form, setForm }: CategoryPickerProps) => {
    return (
        <View>
            <Text style={globalStyles.inputLabel}>Categoria</Text>
            <View style={globalStyles.picker}>
                <Picker
                    selectedValue={form.category}
                    onValueChange={(itemValue) => setForm({ ...form, category: itemValue })}
                    style={globalStyles.pickerInput}
                >
                    <Picker.Item 
                        label={categories.income.displayName}
                        value={categories.income.name}
                    />
                    <Picker.Item 
                        label={categories.food.displayName}
                        value={categories.food.name}
                    />
                    <Picker.Item 
                        label={categories.house.displayName}
                        value={categories.house.name}
                    />
                    <Picker.Item 
                        label={categories.education.displayName}
                        value={categories.education.name}
                    />
                    <Picker.Item 
                        label={categories.travel.displayName}
                        value={categories.travel.name}
                    />
                    </Picker>
                </View>
        </View>
    )
}
export default CategoryPicker