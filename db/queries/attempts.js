const db = require('../connection');

const getAttempts = () => {
  return db.query('SELECT * FROM attempts;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAttempts };
