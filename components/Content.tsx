import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, SafeAreaView, ScrollView } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    decoration?: boolean;
}

export function Content({ children, style, decoration = false, contentStyle }: ContentProps) {
    return (
       <View style={{...styles.container, ...style, }}>
            <SafeAreaView style={{ width: '100%', zIndex: 10, flex: 1 }}>
                <ScrollView style={{ ...styles.content, ...contentStyle }}>
                    <View style={{ marginVertical: 40 }}>
                        {children}
                    </View>
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
        marginBottom: 10,
        paddingHorizontal: 35,
        zIndex: 1,
        borderTopEndRadius: 70,
        borderTopStartRadius: 70,
    },
    square: {
        width: "100%",
        height: "100%",
        backgroundColor: '#E9A318',
        borderTopEndRadius: 70,
        borderTopStartRadius: 70,
        position: 'absolute', 
        top: '70%', 
        zIndex: 0
    },
})