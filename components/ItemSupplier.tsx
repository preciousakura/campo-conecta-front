import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RegularText } from "./Text";
import { Stars } from "./Stars";
import { OrderProps } from "../routes/order";
import { useNavigation } from "@react-navigation/native";
import { Supplier } from "../types/supplier";

type ItemSupplierProps = {
    supplier: Supplier;
}

export function ItemSupplier({ supplier }: ItemSupplierProps) {
    const navigation = useNavigation<OrderProps>();
    const { name, rating, slogan } = supplier;

    return (
       <TouchableOpacity onPress={() => navigation.navigate('Supplier', { supplier })} style={styles.container}>
            <View style={{ justifyContent: 'space-between', width: '60%' }}>
                <View style={{ gap: 4 }}>
                    <RegularText 
                        text={name}
                        style={{ color: '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 13, textTransform: 'uppercase' }} 
                    /> 
                    <RegularText 
                        text={slogan}
                        style={{ color: '#8E8E8E', fontFamily: 'MontserratSemiBold', fontSize: 11 }} 
                    /> 
                </View>
                <Stars stars={rating} />
            </View>
            <Image 
                source={require('../assets/images/logo-box.png')} 
                resizeMode='contain'
                style={{ width: 70, height: 70 }}
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
        padding: 15
    },
})