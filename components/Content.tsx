import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, SafeAreaView, ScrollView } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: ViewStyle;
    decoration?: boolean;
    childScreen?: string;
}

export function Content({ children, style, decoration = false,childScreen }: ContentProps) {
    return (
       <View style={{...style, ...styles.container, backgroundColor:childScreen == 'home' ? '#819601' : 'white'}}>
            <SafeAreaView style={{ width: '100%', zIndex: 10, flex: 1 }}>
                <ScrollView style={styles.content}>
                    {children}
                </ScrollView>
            </SafeAreaView>
            {decoration && <View style={childScreen == 'home' ? styles.cicle : styles.square}></View>}
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#819601',
        alignItems: 'center',
        justifyContent: 'center',
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
    cicle: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FFFFFF',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        position: 'absolute', 
        top: '65%', 
        zIndex: 0
    },
})