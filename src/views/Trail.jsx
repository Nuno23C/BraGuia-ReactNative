// Dependencies
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Trail({ route }) {

  const { trail } = route.params;

  return (
    <View>
      <Text>{trail.trail_name}</Text>
    </View>
  );
}
