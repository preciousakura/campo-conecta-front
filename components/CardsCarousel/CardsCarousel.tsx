import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import { CardProduct, CardProductProps } from "../CardProduct";

type CardsCarouselProps = & {
  products: CardProductProps[];
  style?: ViewStyle;
}
export function CardsCarousel({ products, style }: CardsCarouselProps) {
  return (
    <View style={[styles.container, style]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {products.map((product, index) => (
        <CardProduct
          key={index} 
          {...product} 
        />
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  scrollContent:{

  }
})

