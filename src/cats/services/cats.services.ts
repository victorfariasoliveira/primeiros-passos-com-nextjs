import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interfaces';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat  {
    return this.cats.find(cat => cat.id == id)
  }

  update(data: UpdateCatDto, id: string): Cat {
    const intId = parseInt(id)
    const cat = this.cats.find(cat => cat.id === intId)
    return Object.assign(cat, data)
  }

  delete(cat: Cat ) {
    this.cats.splice(cat.id, 1)
  }
}
