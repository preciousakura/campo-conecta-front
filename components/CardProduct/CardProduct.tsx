import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, ImageSourcePropType, ViewStyle, } from 'react-native';

export type CardProductProps = & {
  imageUri: ImageSourcePropType;
  title: string;
  qtd_pedido: number;
  value: number;
  days: number;
  onPress: () => void;
  style: ViewStyle
}

export function CardProduct({ imageUri, title, qtd_pedido, value, days, style }: CardProductProps) {
  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.textTop}>
      <Text style={[styles.textoDias, { color: days < 8 ? "#EBA416" : (days > 11 ? "#AEC80D" : "#8E8E8E") }]}>{days} dias</Text>
      <Ionicons name="time-outline" size={15} color={days < 8 ? "#EBA416" : (days > 11 ? "#AEC80D" : "#8E8E8E")}  style={styles.icon}/>
      </View>
      <Image source={imageUri} style={styles.image} />
      <View>
        <Text style={styles.tituloPedido}>{title}</Text>
        <View style={styles.textBottom}>
          <Text style={styles.texto}>{qtd_pedido} pedidos</Text>
          <Text style={styles.texto}>R$ {(value).toFixed(2)} und</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: '35%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5, 
  },
  image: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    top:'2%'
  },
  tituloPedido: {
    color: '#6F6F6F',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    borderRadius: 5,
    top:'60%',
    paddingHorizontal:10,
  },
  texto: {
    color: '#6F6F6F',
    fontSize: 14,
    textAlign: 'left',
    borderRadius: 5,
    paddingHorizontal:10
  },
  textBottom: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    top: '15%',
    marginBottom:10
  },

  textoDias: {
    position: 'absolute',
    top: '40%',
    right: '70%',
    fontSize: 14,
    padding: 5,
    borderRadius: 5,
  },

  textTop:{
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    position: 'absolute', 
    top: '2%', 
    right: '5%', 
  },
  icon: {
    top: '60%',
    marginLeft: 5,
  },
});
