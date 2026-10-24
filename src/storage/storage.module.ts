import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';

@Module({
  providers: [StorageService],
  exports: [StorageService], // Obligatorio para que ReportsModule pueda usar el servicio
})
export class StorageModule {}