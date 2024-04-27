import { ScrollView, StyleSheet, View } from 'react-native';
import { BackButton, FilterItem, ItemSupplier, ProductCard, RegularText, Search } from '../../components';
import { useState } from 'react';
import { Supplier } from '../../types/supplier';
import { RouteProp, useRoute } from '@react-navigation/native';
import { OrderParamList } from '../../routes/order';

const items: Supplier[] = [
    {
      id: 1,
      name: "Company A",
      rating: 2,
      logo: "https://example.com/company_a_logo.png",
      slogan: "Building a brighter future",
      description: "Company A is committed to developing sustainable solutions for global challenges.",
      products: []
    },
    {
      id: 2,
      name: "Company B",
      rating: 3,
      logo: "https://example.com/company_b_logo.png",
      slogan: "Empowering innovation",
      description: "Company B specializes in cutting-edge technologies and fosters innovation in various sectors.",
      products: []
    }
  ];

export function Suppliers() {
  const route = useRoute<RouteProp<OrderParamList, 'Suppliers'>>();
  const { title } = route.params;
  
  const [frequency, setFrenquency] = useState('Todos');

  return (
    <View style={styles.container}>
      <BackButton title={title} />
      <RegularText text="Fornecedores" style={{ fontSize: 22, fontFamily: 'MontserratBold', textAlign: 'left', paddingHorizontal: 35, marginBottom: 20 }} />
      <View style={{ paddingHorizontal: 35 }}>
        <Search props={{ placeholder: 'Buscar' }} />
      </View>
      <View style={{ flexDirection: 'row', width: '100%', gap: 6, paddingHorizontal: 35, paddingVertical: 20 }}>
          <FilterItem isSelected={frequency == 'Todos'} title='Todos' onPress={() => setFrenquency('Todos')} />
          <FilterItem isSelected={frequency == 'Papelão'} title='Papelão' onPress={() => setFrenquency('Papelão')} />
          <FilterItem isSelected={frequency == 'Vidro'} title='Vidro' onPress={() => setFrenquency('Vidro')} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{ gap: 10, paddingHorizontal: 35, marginBottom: 20 }}>
            {items.map(item => (
                <ItemSupplier key={item.id} supplier={item}/>
            ))}
        </View>
        <View 
          style={{ 
            backgroundColor: '#E9A318', 
            height: '100%', 
            borderTopEndRadius: 70, 
            borderTopStartRadius: 70, 
            paddingVertical: 40,
            paddingHorizontal: 35
          }}>
          <RegularText text="Pedidos em aberto" style={{ fontSize: 18, fontFamily: 'MontserratBold', paddingBottom: 20 }} />
          <View>
            <ScrollView 
              horizontal 
              style={{ width: '100%', overflow: 'visible' }} 
              contentContainerStyle={{ flexDirection: 'row', gap: 20 }}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#819601',
    justifyContent: 'center',
  }
});
