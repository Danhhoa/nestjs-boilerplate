import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import envConfig from './configs/env.config';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [envConfig],
            cache: true,
        }),
        UsersModule,
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.getOrThrow('database.host'),
                port: configService.getOrThrow('database.port'),
                username: configService.getOrThrow('database.username'),
                password: configService.getOrThrow('database.password'),
                database: configService.getOrThrow('database.name'),
                entities: [__dirname + '/**/entities/*.entity.ts'],
                synchronize: false,
                migrations:
                    process.env.NODE_ENV === 'production'
                        ? [
                              'dist/typeorm/migrations/*.js',
                              'dist/typeorm/seeds/*.js',
                          ]
                        : [
                              'src/typeorm/migrations/*.{js,ts}',
                              'src/typeorm/seeds/*.{js,ts}',
                          ],
            }),
        }),
    ],
    controllers: [AppController, UsersController],
    providers: [AppService, UsersService],
})
export class AppModule {}
