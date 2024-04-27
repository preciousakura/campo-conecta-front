import { View, TextInput, StyleSheet, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

type SearchBarProps =  & {
  placeholder: string;
  style?: TextStyle;
}

export function SearchBar({ placeholder, style }: SearchBarProps) {
  return (
    <View style={{...styles.container, ...style}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
      <Ionicons
        name="search"
        size={24}
        color="#8E8E8E"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    width:"88%",
    marginBottom: 10,
    backgroundColor:'white',
  },
  input: {
    flex: 1,
    height:50,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

