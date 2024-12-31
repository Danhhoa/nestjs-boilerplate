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
    entities: [__dirname + '../../**/entities/*.entity.ts'],
    synchronize: false,
    // migrations:  
    //     envConfig().app.nodeEnv === 'production'
    //         ? [__dirname + '/dist/typeorm/migrations/*.js', __dirname + '/dist/typeorm/seeds/*.js']
    //         : ['/src/migrations/*.ts'],
    //         // : [
    //         //       __dirname + '/../../src/typeorm/migrations/*.{js,ts}',
    //         //       __dirname + '/../../src/typeorm/seeds/*.{js,ts}',
    //         //   ],
    namingStrategy: new SnakeNamingStrategy(),
    

}


