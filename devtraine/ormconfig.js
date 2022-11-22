module.exports = {
  type: 'postgres',
  host: 'db',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'cursonestjs',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};