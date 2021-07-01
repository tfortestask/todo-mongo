import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../../constants';
import { Models } from '../constants';
import { databaseConfig } from '../database.config';
import { IDatabaseConfigAttributes } from '../interfaces/db-config.interface';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: IDatabaseConfigAttributes | SequelizeOptions;

      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }

      const sequelize = new Sequelize(config as SequelizeOptions);

      sequelize.addModels(Models);

      await sequelize.sync();

      return sequelize;
    },
  },
];
