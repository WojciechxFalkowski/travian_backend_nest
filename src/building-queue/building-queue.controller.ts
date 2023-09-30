import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BuildingQueueService } from './building-queue.service';
import { AddToBuildingQueueDto } from './building-queue.contracts';

@Controller('building-queue')
export class BuildingQueueController {
    constructor(
        private buildingQueueService: BuildingQueueService) { }

    @Get('')
    async getBuildingQueue(@Body() data: { server: string }) {
        return await this.buildingQueueService.getBuildingQueue(data.server)
    }

    @Post('/server')
    async getBuildingServerQueue(@Body() data: { server: string }) {
        return await this.buildingQueueService.getBuildingServerQueue(data.server)
    }

    @Post('')
    async addBuildingToQueue(@Body() buildingDto: AddToBuildingQueueDto) {
        await this.buildingQueueService.addBuildingToQueue(buildingDto)
    }

    @Delete('')
    async deleteBuildingFromQueue(@Body() buildingToDelete: AddToBuildingQueueDto) {
        await this.buildingQueueService.deleteBuildingFromQueue(buildingToDelete)
    }

}
