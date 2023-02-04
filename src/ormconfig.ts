import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: 'admin',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], //look for all find with ts js
  synchronize: false, //sync orm code to database
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export default config;
