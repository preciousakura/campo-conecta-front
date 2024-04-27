import { View, StyleSheet, Image } from 'react-native';

type SandwichMenuProps =  & {
  imageUrl: string;
}
export function Avatar({ imageUrl } : SandwichMenuProps) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUrl }} style={styles.avatar} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    alignItems: 'center',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	}
});
