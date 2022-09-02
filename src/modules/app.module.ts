import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController, CountryController } from '@src/controllers';
import { AppService, CountryService } from '@src/services';
import { databaseOptions } from '@src/config';

@Module({
    imports: [TypeOrmModule.forRoot(databaseOptions)],
    controllers: [AppController, CountryController],
    providers: [AppService, CountryService],
})
export class AppModule {}
