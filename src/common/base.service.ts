import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';

export class BaseService<Entity> {
    constructor(public readonly repository: Repository<Entity>) {}

    async getAll(
        where?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
        options?: FindOneOptions<Entity>,
    ): Promise<Entity[]> {
        return this.repository.find({ where, ...options });
    }
}
