import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import envConfig from './env.config';


export const options: DataSourceOptions = {
    type: 'mysql',
    host: envConfig().database.host,
    port: Number(envConfig().database.port),
    username: envConfig().database.username,
    password: envConfig().database.password,
    database: envConfig().database.name,
    entities: [__dirname + '/../../src/**/entities/*.entity.{js,ts}'],
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy(),
    

}


