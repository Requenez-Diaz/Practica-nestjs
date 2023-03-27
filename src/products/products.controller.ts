import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  HttpStatus,
  Res,
  Put,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAll();
  }

  @Post()
  @HttpCode(204)
  createProduct(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    this.productsService.insert({
      id: this.productsService.getAll().length,
      name,
      description,
    });
  }

  // @Get()
  // getHelloProducts(): string {
  //   return 'estamos en productos';
  // }
  // @Get('hot')
  // getSpegcialProducts(): string {
  //   return 'Te vamos a mostrar los productos más calientes!!';
  // }

  // @Get(':id/:size')
  // findWidthSize(@Param() params) {
  //   return `Estas consultando productos ${params.id}, con tamanio ${params.size}`;
  // }

  // // Parametros en decoradores
  // // @Get(':id')
  // // find(@Param('id') id: number) {
  // //   return `Esta es la pagina del producto ${id}`;
  // // }

  // @Get(':id/:size')
  // findWithSize(@Param('size') size: number, @Param('id') id: number) {
  //   return `Estas consultando product ${id}, con tamanio ${size}`;
  // }

  // // @Post()
  // // createProduct(
  // //   @Body('name') name: string,
  // //   @Body('description') description: string,
  // // ) {
  // //   return `creo el product con el nombre ${name} con  su description ${description}`;
  // // }

  // //Codis de estados

  // @Get('ruta-error-404')
  // @HttpCode(HttpStatus.NOT_FOUND)
  // rutaConError404() {
  //   return 'creo un error 404';
  // }

  // @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  // createProducts(@Body() body) {
  //   // return `creo un producto ${body.name} con la descripcion ${body.description}`;
  //   return body;
  // }

  // //resivir objetos con decoradores @resp
  // @Get(':id')
  // find(@Res() response, @Param('id') id: number) {
  //   if (id < 100) {
  //     return response.status(HttpStatus.OK).send(`pagina del producto ${id}`);
  //   } else {
  //     return response
  //       .status(HttpStatus.NOT_FOUND)
  //       .send(`pagina del producto inexistente`);
  //   }
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() body) {
  //   return `Estás haciendo una operación de actualización del recurso ${id}
  //         con ${body.name} y ${body.description}`;
  // }

  // @Patch(':id')
  // partialUpdate(@Param('id') id: number, @Body() body) {
  //   return `Actulizacion parcial del item ${id}`;
  // }
  // //Este no es muy necesario por que solo tiendes a actualizar parcialmente

  // @Delete(':id')
  // @HttpCode(HttpStatus.NOT_FOUND)
  // delete(@Param('id') id: number) {
  //   return `Hemos eliminado un producto con el id ${id}`;
  // }
  // //Varibles Query string y validacion de datos

  // @Get('cars')
  // carsQuery(@Query('count', ParseIntPipe) carCount: number) {
  //   return carCount;
  // }
}
