import { View, StyleSheet, ImageSourcePropType, Image, TouchableOpacity } from "react-native";
import { RegularText } from "./Text";
import { Stars } from "./Stars";
import { OrderProps } from "../routes/order";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../types/product";

type ItemProductProps = {
    product: Product;
}

export function ItemProduct({ product }: ItemProductProps) {
    const navigation = useNavigation<OrderProps>();
    const { name, price, rating  } = product;

    return (
       <TouchableOpacity onPress={() => navigation.navigate('Product', { product })} style={styles.container}>
            <View style={{ justifyContent: 'space-between', width: '60%' }}>
                <RegularText 
                    text={name}
                    style={{ color: '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 13, textTransform: 'uppercase' }} 
                /> 
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stars stars={rating} />
                    <RegularText 
                        text={`R$ ${price}`}
                        style={{ color: '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 11, textTransform: 'uppercase' }} 
                    /> 
                </View>
            </View>
            <View 
                style={{ width: 60, height: 60, backgroundColor: 'brown' }}
            />
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        padding: 20
    },
})