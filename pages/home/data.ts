import { CardProductProps } from "../../components/CardProduct";

export const productsList: CardProductProps[] = [
  {
    imageUri: require('../../assets/caixas.png'),
    title: 'CAIXAS DE PAPEL',
    qtd_pedido: 5,
    value: 1.50,
    days: 3,
    onPress: () => {}, 
    style: {}, 
  },
  {
    imageUri: require('../../assets/garrafas.png'),
    title: 'GARRAFAS DE VIDRO',
    qtd_pedido: 3,
    value: 5,
    days: 8,
    onPress: () => {}, 
    style: {}, 
  },
  {
    imageUri: require('../../assets/saco.png'),
    title: 'SACO KRAFT - M',
    qtd_pedido: 75,
    value: 1.50,
    days: 12,
    onPress: () => {}, 
    style: {}, 
  },

];