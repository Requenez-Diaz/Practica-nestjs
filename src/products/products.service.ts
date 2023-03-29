import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [
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
  lastId: any;

  getAll(): Product[] {
    return this.products;
  }
  getId(id: number): Product {
    return this.products.find((item: Product) => item.id == id);
  }

  insert(body: any) {
    this.products = [
      ...this.products,
      {
        id: this.lastId() + 1,
        name: body.name,
        description: body.description,
      },
    ];
  }
}
