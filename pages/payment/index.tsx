import { StyleSheet, View, Image } from 'react-native';
import { BackButton, Button, Column, Content, RegularText, Stars } from '../../components';
import { Additem } from './components';

export function Payment() {
  return (
    <View style={styles.container}>
        <BackButton title="Empacota e vai" />
        <Content>
            <Column>
                <RegularText 
                    text='CAIXAS DE PAPELÃO' 
                    style={{ color:'#819601', fontFamily: 'MontserratBold', fontSize: 22 }} 
                /> 
                <Stars stars={2} />
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
           <Column>
            <RegularText 
                text='QUANTIDADE ADICIONADA' 
                style={{ color:'#EBA416', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15 }} 
            /> 
            <RegularText 
                text="300"
                style={{ color:'#EBA416', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15 }} 
            /> 
           </Column>
           <Additem values={[10, 50, 100, 250]} />
           <Column style={{ marginBottom: 20 }}>
                <RegularText 
                    text='VALOR DO PEDIDO' 
                    style={{ color:'#A1BA05', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15 }} 
                /> 
                <RegularText 
                    text='R$ 444,92'
                    style={{ color:'#6F6F6F', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 20 }} 
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
           <Button title='Finalizar pedido' buttonStyle={{ marginTop: 20 }} />
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
