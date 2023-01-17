import { Picker } from "@react-native-picker/picker";
// importing Async Storage to access local storage of device.
// https://react-native-async-storage.github.io/async-storage/docs/api/
// can only store 'string' data so for object data use JSON.stringify when
// saving data and JSON.parse() when loading data.
import AsyncStorage from '@react-native-async-storage/async-storage';

// a component used to display a picker and display the selected value.
export default function CustomPicker({ selectedValue, setSelectedValue, localKey }) {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => {
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
