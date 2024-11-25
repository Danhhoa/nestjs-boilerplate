import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    dob: string;

    @Column({ default: true })
    isActive: boolean;
}
