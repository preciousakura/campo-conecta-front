import { StyleSheet, View } from 'react-native';
import { BackButton, Content, FilterItem, RegularText, Search } from '../../components';
import { OrderItem } from './components';
import { useState } from 'react';

export function MyOrders() {
  const [frequency, setFrenquency] = useState('Todos');
  return (
    <View style={styles.container}>
        <BackButton title="Meus pedidos" />
        <Search props={{ placeholder: 'Pesquisar todos os pedidos' }} />
        <View style={{ flexDirection: 'row', width: '100%', gap: 6, paddingHorizontal: 35, paddingVertical: 20 }}>
            <FilterItem isSelected={frequency == 'Todos'} title='Todos' onPress={() => setFrenquency('Todos')} />
            <FilterItem isSelected={frequency == '3 meses'} title='3 meses' onPress={() => setFrenquency('3 meses')} />
            <FilterItem isSelected={frequency == '6 meses'} title='6 meses' onPress={() => setFrenquency('6 meses')} />
            <FilterItem isSelected={frequency == '1 ano'} title='1 ano' onPress={() => setFrenquency('1 ano')} />
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
