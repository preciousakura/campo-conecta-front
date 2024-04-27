import { Product } from "./product";

export type Supplier = {
  id: number;
  name: string;
  rating: number;
  logo: string;
  slogan: string;
  description: string;
  products: Product[]
}