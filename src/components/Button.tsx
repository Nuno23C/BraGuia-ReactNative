import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Buttons} from '../styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    ...Buttons.smallRounded,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Button;
