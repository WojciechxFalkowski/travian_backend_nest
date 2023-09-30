import {
    Body,
    Controller,
    Delete,
    Param,
    Post,
    Put,
    Res,
    Request
} from '@nestjs/common';
import { VillageService } from './village.service';
import { CreateVillageDto } from './dto';

@Controller('village')
export class VillageController {
    constructor(
        private villageService: VillageService) { }

    @Post('villages')
    async createVillages(@Body() villagesDto: CreateVillageDto) {
        console.log('villagesDto')
        console.log(villagesDto)
        // this.villageService.createVillages(villagesDto)
    }

}
