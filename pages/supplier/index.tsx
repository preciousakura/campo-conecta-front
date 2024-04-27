import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { BackButton, Column, Content, ItemProduct, ProductCard, RegularText, Stars } from '../../components';
import { Product } from '../../types/product';
import { Supplier as SupplierType } from '../../types/supplier';

const items: Product[] = [
  { id: 1, name: "Product A", description: "Description for Product A", price: 20.99, total_available: 50, size: "Medium", picture: "product_a.jpg", product_type: "Type A", rating: 4.5, supplier_id: 101, orders: [], supplier: {} as SupplierType },
  { id: 2, name: "Product B", description: "Description for Product B", price: 15.49, total_available: 30, size: "Small", picture: "product_b.jpg", product_type: "Type B", rating: 3.8, supplier_id: 102, orders: [], supplier: {} as SupplierType },
  { id: 3, name: "Product C", description: "Description for Product C", price: 25.99, total_available: 20, size: "Large", picture: "product_c.jpg", product_type: "Type A", rating: 4.2, supplier_id: 103, orders: [], supplier: {} as SupplierType },
  { id: 4, name: "Product D", description: "Description for Product D", price: 10.99, total_available: 40, size: "Medium", picture: "product_d.jpg", product_type: "Type C", rating: 4.0, supplier_id: 104, orders: [], supplier: {} as SupplierType },
  { id: 5, name: "Product E", description: "Description for Product E", price: 30.49, total_available: 25, size: "Large", picture: "product_e.jpg", product_type: "Type B", rating: 4.7, supplier_id: 105, orders: [], supplier: {} as SupplierType },
  { id: 6, name: "Product F", description: "Description for Product F", price: 12.79, total_available: 35, size: "Small", picture: "product_f.jpg", product_type: "Type A", rating: 3.5, supplier_id: 106, orders: [], supplier: {} as SupplierType },
  { id: 7, name: "Product G", description: "Description for Product G", price: 22.99, total_available: 15, size: "Medium", picture: "product_g.jpg", product_type: "Type C", rating: 4.2, supplier_id: 107, orders: [], supplier: {} as SupplierType },
  { id: 8, name: "Product H", description: "Description for Product H", price: 18.59, total_available: 60, size: "Large", picture: "product_h.jpg", product_type: "Type B", rating: 4.8, supplier_id: 108, orders: [], supplier: {} as SupplierType },
  { id: 9, name: "Product I", description: "Description for Product I", price: 28.99, total_available: 20, size: "Small", picture: "product_i.jpg", product_type: "Type A", rating: 4.3, supplier_id: 109, orders: [], supplier: {} as SupplierType },
  { id: 10, name: "Product J", description: "Description for Product J", price: 19.99, total_available: 45, size: "Medium", picture: "product_j.jpg", product_type: "Type C", rating: 4.6, supplier_id: 110, orders: [], supplier: {} as SupplierType },
]

export function Supplier() {
  return (
    <View style={styles.container}>
        <BackButton title="Fornecedores" />
        <Content decoration>
            <Column>
                <Image 
                    source={require('../../assets/images/empacota-e-vai.png')} 
                    resizeMode='contain'
                    style={{ width: '35%', borderRadius: 12, marginVertical: 15 }}
                />
                <View style={{ alignItems: 'flex-end' }}>
                    <RegularText 
                        text='Empacota e vai' 
                        style={{ color:'#819601', fontFamily: 'MontserratBold', fontSize: 22 }} 
                    /> 
                    <RegularText 
                        text='Embalagens e rótulos' 
                        style={{ 
                            color:'#819601', 
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 14, 
                            marginTop: 5, 
                            marginBottom: 10 }} 
                    /> 
                    <Stars stars={2} />
                </View>
            </Column>
            <RegularText 
                text='Somos uma loja atuante no mercado há 30 anos, vencendo o prêmio de melhor caixas 2021 pela Associação Caixistas.' 
                style={{ color:'#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratSemiBold', fontSize: 13, marginTop: 5 }} 
            /> 
            <RegularText 
                text='Nosso compromisso é oferecer aos nossos clientes as melhores soluções em embalagens e caixas para os...' 
                style={{ color:'#8E8E8E', textAlign: 'justify', fontFamily: 'MontserratSemiBold', fontSize: 13, marginTop: 5 }} 
            /> 
            <RegularText 
                text='Ver mais detalhes' 
                style={{ color:'#EBA416', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 13, marginTop: 20 }} 
            /> 

            <RegularText 
                text='ITENS MAIS PEDIDOS' 
                style={{ color:'#A1BA05', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15, marginTop: 20 }} 
            /> 

            <View style={{ marginTop: 20 }}>
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

            <RegularText 
                text='CATÁLOGO COMPLETO' 
                style={{ color:'#FFF', textAlign: 'justify', fontFamily: 'MontserratBold', fontSize: 15, marginTop: 20 }} 
            /> 

            <View style={{ gap: 10, marginTop: 20 }}>
                {items.map(item => (
                    <ItemProduct key={item.id} product={item}/>
                ))}
            </View>
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
