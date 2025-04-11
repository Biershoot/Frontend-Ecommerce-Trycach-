export interface Product {
  id?: number; // Hacer que 'id' sea opcional
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}
