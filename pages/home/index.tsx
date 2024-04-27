import { StyleSheet, View, ScrollView } from 'react-native';
import { SandwichMenu } from './components/Menu';
import { Avatar } from './components';
import { CardCategory, CardsCarousel, RegularText, SearchBar, TagsCarousel, TitleText,  } from '../../components';
import { productsList } from './data';

export function Home() {
  return (
    <View>
    <ScrollView>
    <View style={styles.container} >
      <SandwichMenu onPress={() => { }} />
      <Avatar imageUrl={"https://inteligenciafinanceira.com.br/wp-content/uploads/2023/11/Taylor_Swift_eras.webp"} />
      <TitleText style={styles.messageText} text={'Bem Vindo'} />
      <RegularText style={styles.subtitle} text={'Quais os pedidos para hoje?'} />
      <SearchBar placeholder={'Buscar'} style={styles.searchBar} />
      <TitleText style={styles.titleText} text={'Pedidos em aberto'} />
      <TagsCarousel style={styles.tags} titles={['Todos', 'Papel e papelão', 'Vidro', 'Plástico']} />
      <CardsCarousel products={productsList} style={styles.card}/>
      <View style={styles.cardRow}>
        <CardCategory imageUri={require('../../assets/embalagens.png')} title={'EMBALAGENS'} onPress={() => {}} />
        <CardCategory imageUri={require('../../assets/rotulos.png')} title={'RÓTULOS'} onPress={() => {}} />
        <CardCategory imageUri={require('../../assets/equipamentos.png')} title={'EQUIPAMENTOS'} onPress={() => {}} />
      </View>
      <View style={styles.circle}></View>
    </View>
    </ScrollView>
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
    width: 460,
    height: 540,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    bottom: -280,
    zIndex: -1
  },
  messageText: {
    fontSize: 22,
    top: '3%',
    right: '25%',
  },
  titleText: {
    fontSize: 24,
    top: '8%',
    right: '10%',
  },
  subtitle: {
    fontSize: 14,
    top: '4%',
    right: '16%',
  },
  searchBar: {
    top: '20%',
  },
  tags: {
    top: '30%',
    left: '6%',
  },
  card:{
    top:'20%',
    left: '5%',
    position: 'absolute'
  },
  cardRow:{
    flexDirection: 'row',
    top:'120%',
  }
});
