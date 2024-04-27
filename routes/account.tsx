import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Payment, Register } from "../pages";

type AccountParamList = {
    Login: undefined;
    Register: undefined;
}

export type AccountProps = NativeStackNavigationProp<AccountParamList>;

const Account = createNativeStackNavigator<AccountParamList>();

export default function AccountNavigator() {
  return (
    <Account.Navigator initialRouteName="Login">
      <Account.Screen
        name="Login"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Account.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Account.Navigator>
  );
}
