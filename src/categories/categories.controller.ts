import { Controller, Get, Head, Header } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  private staticCategories = [
    { id: 1, name: 'cars' },
    { id: 2, name: 'property' },
    { id: 3, name: 'jobs' },
    { id: 4, name: 'services' }
  ];

  @Get()
  @Header('Cache-Control', 'public, max-age=3600')
  getCategories() {
    return this.staticCategories;
  }
}
