import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [CategoriesModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
