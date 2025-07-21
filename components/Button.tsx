import { globalStyles } from "@/assets/styles/globalStyles";
import { ReactNode } from "react";
import { GestureResponderEvent, Text, TouchableHighlight } from "react-native";

interface ButtonProps {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableHighlight style={globalStyles.background} onPress={onPress}>
      <Text style={globalStyles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
