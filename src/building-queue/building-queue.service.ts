import { Inject, Injectable } from '@nestjs/common';
import { AddToBuildingQueueDto, BUILDING_QUEUE_REPOSITORY } from './building-queue.contracts';
import { Repository } from 'typeorm';
import { BuildingQueue } from './entities/collection.entity';

@Injectable()
export class BuildingQueueService {
    constructor(
        @Inject(BUILDING_QUEUE_REPOSITORY)
        private buildingQueueRepository: Repository<BuildingQueue>,
    ) { }

    public async getBuildingQueue(
        server: string,
    ): Promise<AddToBuildingQueueDto[]> {
        const buildingQueue = await this.buildingQueueRepository.find()
        return buildingQueue
    }

    public async getBuildingServerQueue(
        server: string,
    ): Promise<AddToBuildingQueueDto[]> {
        const buildingQueue = await this.buildingQueueRepository.findBy({
            server,
        })
        return buildingQueue
    }

    public async addBuildingToQueue(
        addToBuildingQueueDto: AddToBuildingQueueDto,
    ): Promise<void> {
        const newBuildingInQueue = await this.buildingQueueRepository.create(addToBuildingQueueDto)
        await this.buildingQueueRepository.save(newBuildingInQueue)
    }

    public async deleteBuildingFromQueue(
        buildingToDelete: AddToBuildingQueueDto,
    ): Promise<void> {
        const buildingInQueue = await this.buildingQueueRepository.findOneBy({
            server: buildingToDelete.server,
            buildingName: buildingToDelete.buildingName,
            level: buildingToDelete.level
        })

        await this.buildingQueueRepository.delete(buildingInQueue.id)
    }
}
