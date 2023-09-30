import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config';
import { VillageModule } from './village/village.module';
import { BuildingQueueModule } from './building-queue/building-queue.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration], isGlobal: true, cache: true, }), DatabaseModule, VillageModule, BuildingQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
