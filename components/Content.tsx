import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle, SafeAreaView, ScrollView } from "react-native";

type ContentProps = {
    children: ReactNode;
    style?: ViewStyle
}

export function Content({ children, style }: ContentProps) {
    return (
       <View style={{...style, ...styles.container}}>
            <SafeAreaView style={{ width: '100%' }}>
                <ScrollView style={styles.content}>
                    {children}
                </ScrollView>
            </SafeAreaView>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderStartEndRadius: 70,
        borderTopStartRadius: 70,
    },
    content: {
        marginTop: 40,
        marginBottom: 20,
        paddingHorizontal: 45,
    }
})