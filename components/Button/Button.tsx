import { StyleSheet, TouchableOpacity, Text, TextStyle, ViewStyle, GestureResponderEvent } from 'react-native';

type ButtonProps = {
    title: string;
    titleStyle?: TextStyle;
    buttonStyle?: ViewStyle;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    
}

export function Button({ title, titleStyle, buttonStyle, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...buttonStyle }}>
        <Text style={{ ...styles.text, ...titleStyle }}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8B44B',
    borderRadius: 12,
    padding: 15,
  },
  text: {
    color: 'white',
    fontFamily: 'MontserratBold',
    textAlign: 'center',
    fontSize: 16
  }
});
