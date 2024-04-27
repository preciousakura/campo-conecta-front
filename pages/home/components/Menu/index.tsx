import { TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SandwichMenuProps =  & {
  onPress: () => void;
}
export function SandwichMenu({ onPress } : SandwichMenuProps) {
  return (
    <TouchableOpacity onPress={onPress} >
      <Ionicons name="menu" size={40} color="white" />
    </TouchableOpacity>
  );
};
