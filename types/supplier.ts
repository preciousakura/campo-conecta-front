import { Product } from "./product";

export type Supplier = {
  id: number;
  name: string;
  rating: string;
  logo: string;
  slogan: string;
  description: string;
  products: Product[]
}