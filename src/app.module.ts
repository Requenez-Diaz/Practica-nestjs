import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { UsersController } from './controllers/users/users.controller';
import { InventaryController } from './inventary/inventary.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, UsersController, InventaryController],
  providers: [AppService],
})
export class AppModule {}
