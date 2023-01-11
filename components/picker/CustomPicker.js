import { Picker } from "@react-native-picker/picker";

export default function CustomPicker({ selectedValue, setSelectedValue }) {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => {
        // setPickerValue(itemValue);
        setSelectedValue(itemValue);
      }}
    >
      <Picker.Item label="1" value={1} />
      <Picker.Item label="2" value={2} />
      <Picker.Item label="3" value={3} />
      <Picker.Item label="4" value={4} />
      <Picker.Item label="5" value={5} />
    </Picker>
  );
}
