import { GestureResponderEvent, StyleSheet, Text, TextStyle } from 'react-native';

type RegularTextProps = {
    text: string;
    style?: TextStyle;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export function RegularText({ text, style, onPress }: RegularTextProps) {
  return <Text onPress={onPress} style={{ ...styles.text, ...style }}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});
