import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Order as OrderComponent, Payment } from "../pages";

type OrderParamList = {
    Order: undefined;
    Payment: undefined
}

export type OrderProps = NativeStackNavigationProp<OrderParamList>;

const Order = createNativeStackNavigator<OrderParamList>();

export default function OrderNavigator() {
  return (
    <Order.Navigator initialRouteName="Order">
      <Order.Screen
        name="Order"
        component={OrderComponent}
        options={{ headerShown: false }}
      />
      <Order.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
    </Order.Navigator>
  );
}
