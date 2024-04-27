import { ScrollView, View, ViewStyle } from "react-native";
import { CardProduct, CardProductProps } from "../CardProduct";

type CardsCarouselProps = & {
  products: CardProductProps[];
  style?: ViewStyle;
}

export function CardsCarousel({ products, style }: CardsCarouselProps) {
  return (
    <View style={{ ...style }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 35, gap: 15 }} horizontal={true} showsHorizontalScrollIndicator={false}>
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
