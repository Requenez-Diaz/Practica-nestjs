import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getHelloProducts(): string {
    return 'estamos en productos';
  }
  @Get('hot')
  getSpecialProducts(): string {
    return 'Te vamos a mostrar los productos más calientes!!';
  }
  @Get(':id/:size')
  find(@Param() params) {
    return `Estas consultando productos ${params.id}, con tamanio ${params.size}`;
  }
}
