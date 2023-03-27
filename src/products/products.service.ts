import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Televisor',
      description: 'Es uno de los mas recientes en salir',
    },
    {
      id: 2,
      name: 'telefono',
      description: 'Capacidad maxima para juegos',
    },
  ];

  getAll() {
    return this.products;
  }
  insert(product) {
    this.products = [...this.products, product];
  }
}
