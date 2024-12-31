import { options } from 'src/configs/typeorm.config';
import { DataSource } from 'typeorm';

const dataSource = new DataSource(options);

export default dataSource;
