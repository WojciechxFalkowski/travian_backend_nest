import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BuildingQueue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  server: string;

  @Column({ nullable: false })
  buildingName: string;

  @Column({ nullable: false })
  level: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  updatedAt: Date;

}

export interface PureCollection {
  name: string;
}
