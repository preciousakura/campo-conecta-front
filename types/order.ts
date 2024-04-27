import { Product } from "./product";
import { User } from "./user";

export type Order = {
  id: number;
  amount: number;
  price: number;
  delivery_price: number;
  delivery_time: Date;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  user: User;
  product_id: number;
  product: Product
}