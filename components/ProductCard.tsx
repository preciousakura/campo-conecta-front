import { View, StyleSheet, Image } from "react-native";
import { RegularText } from "./Text";
import { Stars } from "./Stars";

type ProductCardProps = {}

export function ProductCard({ }: ProductCardProps) {

    return (
        <View style={styles.container}>
            <RegularText 
                text="CAIXAS DE PAPEL"
                style={{ color: '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 13, textTransform: 'uppercase' }} 
            /> 
            <Image 
                source={require('../assets/images/box.png')} 
                resizeMode='contain'
                style={{ width: '100%' }}
            />
            <Stars stars={3} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RegularText 
                    text="5 pedidos"
                    style={{ color: '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 13, textTransform: 'uppercase' }} 
                /> 
                <RegularText 
                    text="R$ 1,50 und"
                    style={{ color: '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 13, textTransform: 'uppercase' }} 
                /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        width: 220,
        gap:10
    },
})