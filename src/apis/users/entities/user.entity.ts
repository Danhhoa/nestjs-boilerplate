import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from '../enum';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    email: string;

    @Column()
    birthday: string;

    @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
    userStatus: UserStatus;

    @Column({ default: true, type: 'tinyint' })
    isActive: boolean;
}
