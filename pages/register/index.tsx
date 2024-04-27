import { StyleSheet, View } from 'react-native';
import { RegularText } from '../../components';
import { Form } from './components';

export function Register() {
  return (
    <View style={styles.container}>
      <RegularText text="Criar conta" style={{ fontSize: 25 }} />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#819601',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
