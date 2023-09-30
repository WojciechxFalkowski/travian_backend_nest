import { DATA_SOURCE } from 'src/database/database.contracts';
import { DataSource } from 'typeorm';
import { BuildingQueue } from './entities/collection.entity';
import { BUILDING_QUEUE_REPOSITORY } from './building-queue.contracts';

export const buildingQueueProviders = [
  {
    provide: BUILDING_QUEUE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BuildingQueue),
    inject: [DATA_SOURCE],
  },
];
