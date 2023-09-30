import { IsString, IsNotEmpty, IsObject, IsIn, IsOptional } from 'class-validator';
import { IVillage } from '../village.contracts';

export class CreateVillageDto {
  server: string
  villages: IVillage[]
}
