import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { options } from "src/configs/typeorm.config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async () => ({
               ...options
            }),
        })
    ]
})

export class DatabaseModule {}
