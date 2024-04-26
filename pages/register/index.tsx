import { StyleSheet, View } from 'react-native';
import { RegularText } from '../../components';
import { Form } from './components';

export function Register() {
  return (
    <View style={styles.container}>
      <RegularText text="Criar conta" style={{ fontSize: 25 }} />
      <Form />
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8F9F2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 560,
    height: 560,
    backgroundColor: '#AAB438',
    borderRadius: 1000, 
    position: 'absolute', 
    top: '68%', 
    zIndex: -1
  },
});
