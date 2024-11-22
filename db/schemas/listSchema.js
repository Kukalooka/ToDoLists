const listSchema = `
  CREATE TABLE IF NOT EXISTS lists (
      listId VARCHAR(255) UNIQUE NOT NULL,
      listName VARCHAR(30) NOT NULL,
      listType TINYINT(255) NOT NULL,
      creationDate TIMESTAMP NOT NULL
  )
`;

module.exports = listSchema;