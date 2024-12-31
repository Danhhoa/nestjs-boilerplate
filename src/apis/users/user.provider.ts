import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from './constants';

export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    },
];
