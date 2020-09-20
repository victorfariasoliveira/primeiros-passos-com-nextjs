import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  
  getHello(): string {
    return 'The next evolution of js world';
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
