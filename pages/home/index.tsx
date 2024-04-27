import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { CardCategory, CardsCarousel, Column, FilterItem, ProductCard, RegularText, Search, TagsCarousel } from '../../components';
import { useState } from 'react';
import { Avatar, SandwichMenu } from './components';
import { productsList } from './data';


export function Home() {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 35 }}>
          <Column style={{ paddingVertical: 20 }}>
            <SandwichMenu />
            <Avatar imageUrl={"https://inteligenciafinanceira.com.br/wp-content/uploads/2023/11/Taylor_Swift_eras.webp"}/>
          </Column>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{ paddingHorizontal: 35 }}>
          <View>
            <RegularText text="Bem-vindo" style={{ fontSize: 22, fontFamily: 'MontserratBold', textAlign: 'left', marginBottom: 10 }} />
            <RegularText text="Quais os pedidos para hoje?" style={{ fontSize: 15, fontFamily: 'MontserratSemiBold', textAlign: 'left', marginBottom: 20 }} />
          </View>
          <Search style={{ paddingHorizontal: 0 }} props={{ placeholder: 'Buscar' }} />

          <RegularText text="Pedidos em aberto" style={{ fontSize: 22, fontFamily: 'MontserratBold', textAlign: 'left', marginBottom: 0,  marginTop: 20 }} />
          <TagsCarousel style={{ marginVertical: 20 }} titles={['Todos', 'Papel e papelão', 'Vidro', 'Plástico']} />
        </View>
        <Column>
          <CardsCarousel products={productsList}/>
        </Column>
        <Column style={{ paddingHorizontal: 35, gap: 10, alignItems: 'flex-start', paddingVertical: 40 }}>
          <CardCategory imageUri={require('../../assets/embalagens.png')} title={'EMBALAGENS'} />
          <CardCategory imageUri={require('../../assets/rotulos.png')} title={'RÓTULOS'} />
          <CardCategory imageUri={require('../../assets/equipamentos.png')} title={'EQUIPAMENTOS'} />
        </Column>
        <View style={styles.square}></View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#819601',
    justifyContent: 'center',
  },
  square: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
    borderTopEndRadius: 70,
    borderTopStartRadius: 70,
    position: 'absolute', 
    top: "50%", 
    zIndex: -1
  },
});
