import { StyleSheet, TouchableOpacity, Text, TextStyle, ViewStyle, ButtonProps as BtnProps } from 'react-native';

type ButtonProps = {
  title: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  props?: BtnProps;
}

export function Button({ title, titleStyle, buttonStyle, props }: ButtonProps) {
  return (
    <TouchableOpacity {...props} style={{ ...styles.container, ...buttonStyle }}>
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
