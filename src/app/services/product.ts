import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Mel de Urze Silvestre',
      weight: 'Frasco 500g',
      price: 12.9,
      image: 'assets/images/jar.png',
      description: 'Mel de urze silvestre produzido artesanalmente em Trás-os-Montes.'
    },
    {
      id: 2,
      name: 'Mel de Urze Silvestre',
      weight: 'Frasco 1kg',
      price: 21.9,
      image: 'assets/images/jar.png',
      description: 'Formato familiar para quem procura um mel intenso, escuro e aromático.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}