import { Module } from '@nestjs/common';
import { CatsController } from 'src/cats/controller/cats.controller';
import { CatsService } from './services/cats.services';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})

export class CatsModule {}