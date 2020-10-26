module.exports = {
  dialect: 'postgres',
  host: 'postgres_db',
  username: 'postgres',
  password: 'docker',
  database: 'bethehero',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
