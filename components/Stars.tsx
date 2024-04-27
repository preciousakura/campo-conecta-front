import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

type StarsProps = {
    stars: number;
}

export function Stars({ stars }: StarsProps) {
    return (
        <View style={styles.container}>
            {Array(5).fill(0).map((v, i) => (
                <Animatable.View animation="flipInY" key={`${v}_${i}`}>
                    <Icon 
                        name="star" 
                        size={20} 
                        color={i < stars ? "#FFDE33" : "#8E8E8E"}
                        style={styles.icon}
                    />
                </Animatable.View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 1
    },
    icon: {
        padding: 0, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginRight: 0
    }
  });