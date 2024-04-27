import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, SafeAreaView, ScrollView } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: ViewStyle;
    decoration?: boolean;
}

export function Content({ children, style, decoration = false }: ContentProps) {
    return (
       <View style={{...style, ...styles.container}}>
            <SafeAreaView style={{ width: '100%', zIndex: 10, flex: 1 }}>
                <ScrollView style={styles.content}>
                    {children}
                </ScrollView>
            </SafeAreaView>
            {decoration && <View style={styles.square}></View>}
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderTopEndRadius: 70,
        borderTopStartRadius: 70,
    },
    content: {
        marginVertical: 40,
        paddingHorizontal: 35,
        zIndex: 1
    },
    square: {
        width: "100%",
        height: "100%",
        backgroundColor: '#E9A318',
        borderTopEndRadius: 70,
        borderTopStartRadius: 70,
        position: 'absolute', 
        top: '55%', 
        zIndex: 0
    },
})