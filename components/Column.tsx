import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type ColumnProps = {
    children: ReactNode;
    style?: ViewStyle
}

export function Column({ children, style }: ColumnProps) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', ...style }}>
            {children}
        </View>
    )
}