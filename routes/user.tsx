import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyOrders } from "../pages";

type UserParamList = {
    MyOrders: undefined;
}

export type UserProps = NativeStackNavigationProp<UserParamList>;

const User = createNativeStackNavigator<UserParamList>();

export default function UserNavigator() {
  return (
    <User.Navigator initialRouteName="MyOrders">
      <User.Screen
        name="MyOrders"
        component={MyOrders}
        options={{ headerShown: false }}
      />
    </User.Navigator>
  );
}
