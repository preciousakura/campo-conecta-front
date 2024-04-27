import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountNavigator from './account';
import OrderNavigator from './order';

const Navigation = createNativeStackNavigator();

export default function Routes() {
    return (
        <Navigation.Navigator>
            <Navigation.Screen
                name="Account"
                component={AccountNavigator}
                options={{ headerShown: false }}
            />
            <Navigation.Screen
                name="Order"
                component={OrderNavigator}
                options={{ headerShown: false }}
            />
        </Navigation.Navigator>
    );
}