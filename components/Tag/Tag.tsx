import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type TagProps = & {
  title: string;
  onPress: () => void;
  selected: boolean;
}

export function Tag({ title, onPress, selected }: TagProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.tag, { backgroundColor: selected ? '#EBA416' : '#FFFFFF' }]}>
        <Text style={[styles.text, {color: selected ? '#FFFFFF' : '#6F6F6F' }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 20,
    paddingHorizontal: 1,
    paddingVertical: 6,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
