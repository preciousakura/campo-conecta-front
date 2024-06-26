import { StyleSheet, View, Image } from 'react-native';
import { BackButton, Button, Column, Content, RegularText, Stars } from '../../components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { OrderParamList, OrderProps } from '../../routes/order';

export function Product() {
  const navigation = useNavigation<OrderProps>();
  const route = useRoute<RouteProp<OrderParamList, 'Product'>>();
  const { product } = route.params;
  
  return ( 
    <View style={styles.container}>
        <BackButton title="Empacota e vai" />
        <Content >
            <Column>
                <RegularText 
                    text={product.name}
                    style={{ color:'#819601', fontFamily: 'MontserratBold', fontSize: 22 }} 
                /> 
                <Stars stars={product.rating} />
            </Column>
           <RegularText 
            text='MEDIDAS: (C x L x A) - 32 x 24 x 20 cm' 
            style={{ color:'#EBA416', fontFamily: 'MontserratBold', fontSize: 12, paddingVertical: 5 }} 
           /> 
           <Image 
            source={require('../../assets/images/boxes.png')} 
            resizeMode='cover'
            style={{ width: '100%', height: 200, borderRadius: 12, marginVertical: 15 }}
           />
           <RegularText 
            text='Papelão Coluna 8 resistente e versátil. Feita de papelão ondulado biodegradável e 100% reciclável.' 
            style={{ color:'#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratSemiBold', fontSize: 13, marginTop: 5 }} 
           /> 
           <RegularText 
            text='QTD MIN PARA ENVIO - 1000 UND' 
            style={{ color:'#A1BA05', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15, paddingVertical: 20 }} 
           /> 
           <RegularText 
            text='PEDIDO ENCERRA EM 3 DIAS' 
            style={{ color:'#EBA416', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15 }} 
           /> 
           <Column style={{ marginBottom: 20 }}>
                <RegularText 
                    text='Previsão de entrega' 
                    style={{ color:'#EBA416', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
                <RegularText 
                    text='05/05/2024' 
                    style={{ color:'#EBA416', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
           </Column>
           <Column>
                <RegularText 
                    text='Valor unitário' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
                <RegularText 
                    text='R$ 1,50' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
           </Column>
           <Column>
                <RegularText 
                    text='Desconto unid.' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
                <RegularText 
                    text='-R$ 0,017' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
           </Column>
           <Column>
                <RegularText 
                    text='Valor do pedido' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
                <RegularText 
                    text='R$ 445,00' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
           </Column>
           <Column>
                <RegularText 
                    text='Valor do frete' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
                <RegularText 
                    text='R$ R$ 21,25' 
                    style={{ color: '#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
           </Column>
           <Column>
                <RegularText 
                    text='Desconto atual' 
                    style={{ color:'#A1BA05', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
                <RegularText 
                    text='-R$ 0,017 unidade' 
                    style={{ color:'#A1BA05', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, paddingVertical: 5 }} 
                /> 
           </Column>
           <Button onPress={() => navigation.navigate('Payment')} title='Realizar pedido' buttonStyle={{ marginTop: 20 }} />
        </Content>
    </View >
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
