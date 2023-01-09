import { Pressable, Text } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {},
});
