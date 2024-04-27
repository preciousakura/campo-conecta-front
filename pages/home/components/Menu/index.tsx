import { TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SandwichMenuProps =  & {
  onPress: () => void;
}
export function SandwichMenu({ onPress } : SandwichMenuProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="menu" size={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: '6%',
    right: '38%',
    padding: 10,
  },
});
