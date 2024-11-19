const userSchema = `
  CREATE TABLE IF NOT EXISTS users (
      userId VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(30) UNIQUE NOT NULL,
      password VARCHAR(255)
  )
`;

module.exports = userSchema;