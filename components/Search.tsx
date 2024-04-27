import { StyleSheet, View, TextInput, TextInputProps, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type SearchProps = {
  props?: TextInputProps;
  style?: TextStyle;
}

export function Search({ props, style }: SearchProps) {
  return (
    <View style={styles.container}>
        <Icon name="search" size={24} style={styles.icon} />
        <TextInput 
          style={{ ...styles.input, ...style }} {...props}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  input: {
    fontFamily: 'MontserratSemiBold',
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 57,
    width: '100%',
    fontSize: 13,
    borderRadius: 10,
    height: 60
  },
  icon: {
    padding: 0, 
    color: '#8E8E8E',
    position: 'absolute',
    zIndex: 1,
    left: 18,
    top: 18
  }
});
