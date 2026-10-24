import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { StorageService } from '../storage/storage.service';
import 'multer';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private reportsRepository: Repository<Report>,
    private storageService: StorageService,
  ) {}

  async create(createReportDto: CreateReportDto, photo: Express.Multer.File) {
    const photoUrl = await this.storageService.uploadFile(photo, 'reports');
    
    const report = this.reportsRepository.create({ ...createReportDto, photoUrl });
    await this.reportsRepository.save(report);
    
    const emailHtml = this.generateReportTemplate(createReportDto, photoUrl);
    console.log('Simulando envío de correo...', emailHtml);
    
    return report;
  }

  findAll() {
    return this.reportsRepository.find();
  }

  private generateReportTemplate(dto: CreateReportDto, photoUrl: string) {
    return `
      <h2>Nuevo Reporte</h2>
      <ul>
        <li><strong>Dirección:</strong> ${dto.address}</li>
      </ul>
      <img src="${photoUrl}" style="max-width: 600px; border-radius: 8px;" />
    `;
  }
}