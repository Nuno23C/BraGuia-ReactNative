// Dependencies
import { StyleSheet, View, Text } from 'react-native';

// Styles and Components
import { Colors } from '../styles';

export default function Pin({ route }) {
  const { pin } = route.params;

  return (
    <View>
      <Text style={styles.title}>{pin.pin_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {

  },
});
