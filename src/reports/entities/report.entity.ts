import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('WATER_REPORT')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  severity: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ name: 'photo_url', type: 'varchar' })
  photoUrl: string;

  @Column({ name: 'repair_photo_url', type: 'varchar', nullable: true })
  repairPhotoUrl: string;
}