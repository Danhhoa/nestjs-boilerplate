import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './apis/api.module';
import { AppController } from './app.controller';
import { providers } from './app.provider';
import { AppService } from './app.service';
import envConfig from './configs/env.config';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [envConfig],
            cache: true,
        }),
        DatabaseModule,
        ApiModule,
    ],
    controllers: [AppController],
    providers: [AppService, ...providers],
})
export class AppModule {}
