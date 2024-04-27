import { Order } from "./order";

export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  last_name: string;
  orders: Order[];
}  