import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountNavigator from './userLogin';

const Navigation = createNativeStackNavigator();

export default function Routes() {
    return (
        <Navigation.Navigator>
            <Navigation.Screen
                name="Account"
                component={AccountNavigator}
                options={{ headerShown: false }}
            />
        </Navigation.Navigator>
    );
}