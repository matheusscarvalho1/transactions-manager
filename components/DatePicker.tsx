import { globalStyles } from "@/assets/styles/globalStyles";
import RNDateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Form {
  description: string;
  value: number;
  date: Date;
  category: string;
}

interface DatePickerProps {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
}

const DatePicker = ({ form, setForm }: DatePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setForm({ ...form, date: selectedDate });
    }
  };

  return (
    <View>
      <Text style={globalStyles.inputLabel}>Data</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <TextInput
          value={form.date.toLocaleDateString("pt-BR")}
          style={globalStyles.input}
          editable={false}
        />
      </TouchableOpacity>

      {showPicker && (
        <RNDateTimePicker
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          value={form.date}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
