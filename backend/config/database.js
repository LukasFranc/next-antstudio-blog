module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'localhost'),
      port: env.int('PGPORT', 3306),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'root'),
      password: env('PGPASSWORD', 'root'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
