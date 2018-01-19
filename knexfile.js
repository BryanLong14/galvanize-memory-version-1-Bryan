module.exports = {
  development: {
    client: 'pg',
    connection:
      "postgres:///memoryv1"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
