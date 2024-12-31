import envConfig from 'src/configs/env.config';
import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'mysql',
    host: envConfig().database.host,
    port: Number(envConfig().database.port),
    username: envConfig().database.username,
    password: envConfig().database.password,
    database: envConfig().database.name,
    entities: [__dirname + '/src/**/entities/*.entity.ts'],
    synchronize: false,
    migrations:  
        envConfig().app.nodeEnv === 'production'
            ? ['dist/typeorm/migrations/*.js']
            : ['src/typeorm/migrations/*.ts'],
           
});