import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { COFFEES_REPOSITORY } from 'src/core/constants';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEES_REPOSITORY)
    private readonly coffeesRepository: typeof Coffee,
  ) {}

  async findAll(): Promise<Coffee[]> {
    return this.coffeesRepository.findAll<Coffee>();
  }

  async findOne(id: string): Promise<Coffee> {
    const coffee = await this.coffeesRepository.findByPk<Coffee>(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  async create(createCoffeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeesRepository.create<Coffee>(createCoffeDto);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee> {
    const coffee = await this.findOne(id);

    return coffee.update({ ...updateCoffeeDto });
  }

  async remove(id: string): Promise<void> {
    const coffee = await this.findOne(id);

    return coffee.destroy();
  }
}
