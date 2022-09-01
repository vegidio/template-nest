import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryController, CountryService } from './countries';

@Module({
    imports: [],
    controllers: [AppController, CountryController],
    providers: [AppService, CountryService],
})
export class AppModule {}
