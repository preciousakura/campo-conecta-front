import { StyleSheet, TouchableOpacity, TextStyle, ButtonProps as BtnProps, SafeAreaView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RegularText } from '../Text';
import { useNavigation } from '@react-navigation/native';

type BackButtonProps = {
  title: string;
  titleStyle?: TextStyle;
  props?: BtnProps;
  isLoading?: boolean;
}

export function BackButton({ title, titleStyle, props, isLoading = false }: BackButtonProps) {
    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity disabled={isLoading} onPress={() => navigation.goBack()} {...props}>
            <Icon name="arrow-back-ios" size={25} style={{ padding: 0, color: 'white' }} />
        </TouchableOpacity>
        <RegularText text={title} style={{ ...titleStyle, fontSize: 25, fontFamily: 'MontserratBold' }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    paddingVertical: 40
  }
});
