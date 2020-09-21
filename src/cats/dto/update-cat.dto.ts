  
import { IsNotEmpty } from 'class-validator';

export class UpdateCatDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly age: number;
  @IsNotEmpty()
  readonly breed: string;
}