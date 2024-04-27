import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register, Home } from "../pages";

type AccountParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
}

export type AccountProps = NativeStackNavigationProp<AccountParamList>;

const Account = createNativeStackNavigator<AccountParamList>();

export default function AccountNavigator() {
  return (
    <Account.Navigator initialRouteName="Home">
      <Account.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Account.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Account.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

    </Account.Navigator>
  );
}
