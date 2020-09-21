  
import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  readonly id: number;
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly age: number;
  @IsNotEmpty()
  readonly breed: string;
}