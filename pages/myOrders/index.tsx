import { StyleSheet, View } from 'react-native';
import { BackButton, Content, FilterItem, RegularText, Search, TagsCarousel } from '../../components';
import { OrderItem } from './components';
import { useState } from 'react';

export function MyOrders() {
  const [frequency, setFrenquency] = useState('Todos');
  return (
    <View style={styles.container}>
        <BackButton title="Meus pedidos" />
        <View style={{ paddingHorizontal: 35, width: '100%' }}>
          <Search props={{ placeholder: 'Pesquisar todos os pedidos' }} />
        </View>
        <View style={{ flex: 1 }}>
          <TagsCarousel style={{ marginVertical: 20 }} titles={['Todos', '3 meses', '6 meses', '1 ano']} /> 
        </View>
        <Content>
          <View style={{ gap: 20 }}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </View>
          <RegularText 
            text="Você chegou ao fim dos seus pedidos."
            style={{ 
              color: '#8E8E8E', 
              fontFamily: 'MontserratSemiBold', 
              fontSize: 13,
              textAlign: 'center',
              paddingVertical: 30
            }} 
          /> 
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
