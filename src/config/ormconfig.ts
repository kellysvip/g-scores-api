import * as path from 'path';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const ormConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gscore_user',
  password: 'gscore_password',
  database: 'gscore_db',
  entities: [path.join(__dirname, '../../src/**/*/*.entity.ts')],
  migrations: [path.join(__dirname, '../../database/migrations/*.ts')],
  migrationsTransactionMode: 'each',
};

export default new DataSource({
  ...ormConfig,
} as PostgresConnectionOptions); 