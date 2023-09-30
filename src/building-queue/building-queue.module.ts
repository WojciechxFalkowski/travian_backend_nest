import { Module } from '@nestjs/common';
import { BuildingQueueService } from './building-queue.service';
import { BuildingQueueController } from './building-queue.controller';
import { buildingQueueProviders } from './building-queue.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...buildingQueueProviders, BuildingQueueService],
  controllers: [BuildingQueueController],
})
export class BuildingQueueModule { }
