import { Coffee } from '../entities/coffee.entity';
import { COFFEES_REPOSITORY } from 'src/core/constants';

export const coffeesProviders = [
  {
    provide: COFFEES_REPOSITORY,
    useValue: Coffee,
  },
];
