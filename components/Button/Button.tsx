import { StyleSheet, TouchableOpacity, Text, TextStyle, ViewStyle, ButtonProps as BtnProps } from 'react-native';

type ButtonProps = {
  title: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  props?: BtnProps;
  isLoading?: boolean;
  onPress?: () => void
}

export function Button({ title, titleStyle, buttonStyle, props, isLoading = false, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading} {...props} style={{ ...styles.container, ...buttonStyle, opacity: isLoading ? 0.6 : 1 }}>
      <Text style={{ ...styles.text, ...titleStyle }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBA416',
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
