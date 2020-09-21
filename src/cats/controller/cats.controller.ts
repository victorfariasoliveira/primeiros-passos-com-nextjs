import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interfaces';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { CatsService } from '../services/cats.services';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);  
  }

  @Get('all')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Cat | void> {
    return this.catsService.findOne(params.id);
  }
  
  @Put(':id')
  async update(@Body() data: UpdateCatDto, @Param() params) {
    this.catsService.update(data, params.id);  
  }
  
  @Delete(':id')
  async delete(@Param() params) {
    this.catsService.delete(params.id) 
  }
}
