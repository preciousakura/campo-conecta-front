import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type TitleTextProps = {
    text: string;
    style?: TextStyle;
    props?: TextProps;
}

export function TitleText({ text, style, props }: TitleTextProps) {
  return <Text {...props} style={{ ...styles.text, ...style }}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'MontserratExtraBold',
    fontWeight: 'bold'
  },
});
