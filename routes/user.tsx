import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, MyOrders } from "../pages";

type UserParamList = {
    Home: undefined;
}

export type UserProps = NativeStackNavigationProp<UserParamList>;

const User = createNativeStackNavigator<UserParamList>();

export default function UserNavigator() {
  return (
    <User.Navigator initialRouteName="Home">
      <User.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </User.Navigator>
  );
}
