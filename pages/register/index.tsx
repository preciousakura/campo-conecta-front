import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export function Register() {
  return (
    <View style={styles.container}>
      <Animatable.Image 
        animation="flipInY"
        source={ require('../../assets/logo-gray.png') }
        style={{ width: '60%', marginBottom: 40 }}
        resizeMode='contain'
      />
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
    bottom: -280, 
    zIndex: -1
  },
});
