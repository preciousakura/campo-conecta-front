import { StyleSheet, TouchableOpacity } from "react-native";
import { RegularText } from "./Text";

type FilterItemProps = {
    title: string;
    isSelected: boolean;
    onPress: () => void;
}

export function FilterItem({ title, isSelected, onPress }: FilterItemProps) {
    return (
       <TouchableOpacity onPress={onPress} style={{ ...styles.container, backgroundColor: isSelected ? '#EBA416' : 'white' }}>
            <RegularText 
                text={title}
                style={{ color: isSelected ? 'white' : '#6F6F6F', fontFamily: 'MontserratBold', fontSize: 13 , textAlign: 'center'}} 
            /> 
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
})