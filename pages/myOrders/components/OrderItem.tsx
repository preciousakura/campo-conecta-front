import { StyleSheet, View, Image } from 'react-native';
import { RegularText } from '../../../components';

export function OrderItem() {
  return (
    <View style={styles.container}>
        <View style={{ justifyContent: 'space-between', width: '60%' }}>
            <View style={{ gap: 2 }}>
                <RegularText 
                    text="CAIXAS DE PAPELÃO"
                    style={{ 
                        color: '#6F6F6F', 
                        fontFamily: 'MontserratBold', 
                        fontSize: 16, textTransform: 'uppercase', 
                    }} 
                /> 
                <RegularText 
                    text="Empacota e vai"
                    style={{ 
                        color: '#819601', 
                        fontFamily: 'MontserratBold', 
                        fontSize: 13 
                    }} 
                /> 
            </View>
            <RegularText 
                text="ENTREGUE"
                style={{ 
                    backgroundColor: '#A1BA05', 
                    fontFamily: 'MontserratBold', 
                    fontSize: 12, width: '55%', 
                    textAlign: 'center', 
                    padding: 5, 
                }} 
            /> 
            <RegularText 
                text="Ver detalhes do pedido"
                style={{ 
                    color: '#EBA416', 
                    fontFamily: 'MontserratBold', 
                    fontSize: 12 
                }} 
            /> 
        </View>
        <Image 
            source={require('../../../assets/images/sacola.jpg')} 
            resizeMode='contain'
            style={{ width: 100, height: 100 }}
        />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#819601'
  }
});
