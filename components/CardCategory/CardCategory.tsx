import { StyleSheet, View, Text, Image, ImageSourcePropType, ViewStyle, TouchableOpacity, } from 'react-native';

export type CardCategoryProps = & {
  imageUri: ImageSourcePropType;
  title: string;
  onPress: () => void;
  style?: ViewStyle
}

export function CardCategory({ imageUri, title, style, onPress }: CardCategoryProps) {
  return (
    <TouchableOpacity style={{ ...style }} onPress={onPress}>
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
    padding: 20,
   marginBottom: 10,
    backgroundColor: '#EBA416',
    marginHorizontal: 10
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  text: {
    color: '#6F6F6F',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
