import { IsString, IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsString() @IsNotEmpty() address: string;
  @IsString() @IsNotEmpty() description: string;
  @IsString() @IsNotEmpty() severity: string;
  @IsString() @IsNotEmpty() phone: string;
}