import { StyleSheet, View } from 'react-native';
import { SandwichMenu } from './components/Menu';
import { Avatar } from './components';
import { CardCategory, CardsCarousel, Column, Content, RegularText, SearchBar, TagsCarousel, TitleText, } from '../../components';
import { productsList } from './data';

export function Home() {
  return (

    <View style={styles.container} >
      <Content decoration  childScreen='home'>
        <Column style={{justifyContent:"space-between", paddingVertical:5}}>
          <SandwichMenu onPress={() => { }} />
          <Avatar imageUrl={"https://inteligenciafinanceira.com.br/wp-content/uploads/2023/11/Taylor_Swift_eras.webp"}/>
        </Column>
        <Column style={{paddingVertical:5}}>
        <TitleText text={'Bem Vindo'} style={styles.messageText}/>
        </Column>
        <Column >
        <RegularText text={'Quais os pedidos para hoje?'} style={styles.subtitle}/>
        </Column>
        <Column style={{paddingVertical:5}}>
        <SearchBar placeholder={'Buscar'}  style={styles.searchBar} data={productsList}/>
        </Column>
        <Column >
        <TitleText  text={'Pedidos em aberto'} style={styles.titleText}/>
        </Column>
        <Column style={styles.tags}>
        <TagsCarousel  titles={['Todos', 'Papel e papelão', 'Vidro', 'Plástico']} />
        </Column>
        <Column style={styles.tags}>
        <CardsCarousel products={productsList}/>
        </Column>
        <Column style={styles.tags}>
        <View style={styles.cardRow}>
        <CardCategory imageUri={require('../../assets/embalagens.png')} title={'EMBALAGENS'} onPress={() => {}} />
        <CardCategory imageUri={require('../../assets/rotulos.png')} title={'RÓTULOS'} onPress={() => {}} />
        <CardCategory imageUri={require('../../assets/equipamentos.png')} title={'EQUIPAMENTOS'} onPress={() => {}} />
      </View>
        </Column>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 22,
  },
  titleText: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
    paddingVertical: 5
  },
  searchBar: {
  marginVertical: 25
  },
  tags: {
    paddingVertical:15
  },
  cardRow:{
    flexDirection: 'row',
  },
});
