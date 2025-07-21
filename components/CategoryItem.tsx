import { categories, CategoryName } from "@/constants/categories";
import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

interface CategoryProps {
  category: CategoryName;
}

const CategoryItem = ({ category }: CategoryProps) => {
  const categoryData = categories[category];
  if (!categoryData) {
    console.error(`Categoria "${category}" não existe`);
    return null;
  }

  const styles = StyleSheet.create({
    background: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: categoryData.background
    },
  });

  return (
    <View style={styles.background}>
      <MaterialIcons
        name={categoryData.icon}
        size={24}
        color={colors.primaryContrast}
      />
    </View>
  );
};

export default CategoryItem;