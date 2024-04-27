import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Product, Payment, Supplier } from "../pages";
import { Product as ProductType } from "../types/product";

export type OrderParamList = {
    Product: { product: ProductType };
    Payment: undefined;
    Supplier: undefined;
}

export type OrderProps = NativeStackNavigationProp<OrderParamList>;

const Order = createNativeStackNavigator<OrderParamList>();

export default function OrderNavigator() {
  return (
    <Order.Navigator initialRouteName="Supplier">
      <Order.Screen
        name="Supplier"
        component={Supplier}
        options={{ headerShown: false }}
      />
      <Order.Screen
        name="Product"
        component={Product}
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
