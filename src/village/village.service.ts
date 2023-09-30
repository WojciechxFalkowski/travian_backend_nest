import { Injectable } from '@nestjs/common';
import { CreateVillageDto } from './dto';
import { VILLAGE_REPOSITORY } from './village.contracts';

@Injectable()
export class VillageService {
    // constructor(
    //     @Inject(VILLAGE_REPOSITORY)
    //     private collectionRepository: Repository<Village>,
    //   ) { }
    public async createCollection(
        villagesDto: CreateVillageDto,
    ): Promise<void> {
        // try {
        //   let cloudinaryImage = null;
        //   if (file) {
        //     cloudinaryImage = await this.cloudinaryService.uploadImage(file);
        //     collectionDto.photoFileName = cloudinaryImage.public_id;
        //   }
        //   const newCollection = this.collectionRepository.create(collectionDto);
        //   newCollection.user = await this.userService.findOneById(userId);

        //   await this.collectionRepository.save(newCollection);
        //   // collection with all relations
        //   const collection = await this.getUserCollectionById(newCollection.id, userId)
        //   // return await this.getCollectionById(newCollection.id);
        //   return await this.mapCollection(collection);
        // } catch (error) {
        //   throw new Error(error);
        // }
    }
}
