import { StyleSheet, View, Text, Image, ImageSourcePropType, ViewStyle, TouchableOpacity, } from 'react-native';
import { OrderProps } from '../../routes/order';
import { useNavigation } from '@react-navigation/native';

export type CardCategoryProps = & {
  imageUri: ImageSourcePropType;
  title: string;
  style?: ViewStyle
}

export function CardCategory({ imageUri, title, style }: CardCategoryProps) {
  const navigation = useNavigation<OrderProps>();

  return (
    <TouchableOpacity style={{ ...style, flex: 1 }} onPress={() => navigation.navigate('Suppliers', { title: title })}>
      <View style={styles.card }>
        <Image source={imageUri} style={styles.image} />
      </View>
      <View>
      <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
   marginBottom: 10,
    backgroundColor: '#EBA416',
    paddingHorizontal: 10,
    alignItems: 'center', justifyContent: 'center',
    width: 100,
    height: 100,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    color: '#6F6F6F',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
