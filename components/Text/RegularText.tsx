import { GestureResponderEvent, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type RegularTextProps = {
    text: string;
    style?: TextStyle;
    props?: TextProps;
}

export function RegularText({ text, style, props }: RegularTextProps) {
  return <Text {...props} style={{ ...styles.text, ...style }}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'MontserratSemiBold',
  },
});
