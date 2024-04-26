import { StyleSheet, View, Text, TextInput, TextInputFocusEventData, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type InputTextProps = {
    title: string;
    placeholder?: string;
    value?: string
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
    hasError?: boolean;
}

export function InputText({ title, placeholder, onChange, onBlur, value, hasError = false }: InputTextProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <TextInput 
          style={{ 
            ...styles.input, 
            ...{ borderColor: hasError ? 'red' : 'transparent' } }} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange}
          onBlur={onBlur}
          
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
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    borderRadius: 10,
    outlineStyle: 'none',
    borderWidth: 1
  }
});
