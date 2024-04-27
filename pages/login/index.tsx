import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Form } from './components';

export function Login() {
  return (
    <View style={styles.container}>
      <Animatable.Image 
        animation="flipInY"
        source={ require('../../assets/logo-gray.png') }
        style={{ width: '60%', marginBottom: 40 }}
        resizeMode='contain'
      />
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
  }
});
