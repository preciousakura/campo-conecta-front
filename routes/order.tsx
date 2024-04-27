import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Product, Payment, Supplier, Suppliers, Home } from "../pages";
import { Product as ProductType } from "../types/product";
import { Supplier as SupplierType } from "../types/supplier";

export type OrderParamList = {
    Home: undefined;
    Product: { product: ProductType };
    Payment: undefined;
    Supplier: { supplier: SupplierType };
    Suppliers: { title: string };
}

export type OrderProps = NativeStackNavigationProp<OrderParamList>;

const Order = createNativeStackNavigator<OrderParamList>();

export default function OrderNavigator() {
  return (
    <Order.Navigator initialRouteName="Home">
      <Order.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Order.Screen
        name="Suppliers"
        component={Suppliers}
        options={{ headerShown: false }}
      />
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
