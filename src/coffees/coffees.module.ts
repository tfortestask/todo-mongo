import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { coffeesProviders } from './providers/coffees.providers';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, ...coffeesProviders],
  imports: [DatabaseModule],
})
export class CoffeesModule {}
