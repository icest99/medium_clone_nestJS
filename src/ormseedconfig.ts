import ormconfig from '@app/ormconfig';

const ormseedconfig = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
  cli: {
    migrationsDir: [__dirname + 'src/seeds'],
  },
};

export default ormseedconfig;
