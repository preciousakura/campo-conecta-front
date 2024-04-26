import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Form } from './components';

export default function Login() {
  return (
    <View style={styles.container}>
        <Animatable.Image 
            animation="flipInY"
            source={ require('../../assets/logo-gray.svg') }
            style={{ width: '60%' }}
            resizeMode='contain'
        />
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
    bottom: -250, 
    zIndex: -1
  },
});
