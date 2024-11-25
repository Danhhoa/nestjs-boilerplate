import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '../../**/entities/*.entity.ts'],
    synchronize: false,
    migrations:
        process.env.NODE_ENV === 'production'
            ? ['dist/typeorm/migrations/*.js', 'dist/typeorm/seeds/*.js']
            : [
                  'src/typeorm/migrations/*.{js,ts}',
                  'src/typeorm/seeds/*.{js,ts}',
              ],
});

export default dataSource;
