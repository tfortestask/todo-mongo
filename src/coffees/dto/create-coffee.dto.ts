import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly breand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
