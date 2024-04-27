import { Order } from "./order";
import { Supplier } from "./supplier";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  total_available: number;
  size: string;
  picture: string;
  product_type: string;
  rating: number
  orders: Order[];
  supplier_id: number;
  supplier: Supplier;
}