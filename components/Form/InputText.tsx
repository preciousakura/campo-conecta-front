import { StyleSheet, View, Text, TextInput, TextInputFocusEventData, NativeSyntheticEvent, TextInputChangeEventData, TextInputProps } from 'react-native';

type InputTextProps =  & {
  title: string;
  hasError?: boolean;
  props: TextInputProps
}

export function InputText({ title, props, hasError = false }: InputTextProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <TextInput 
          style={{ 
            ...styles.input, 
            ...{ borderColor: hasError ? 'red' : 'transparent' } }} 
          {...props}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  text: {
    marginBottom: 10,
    marginTop: 15,
    color: 'white',
    fontFamily: 'MontserratBold'
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    fontFamily: 'MontserratRegular',
    fontSize: 12,
    borderRadius: 10,
    borderWidth: 1
  }
});
