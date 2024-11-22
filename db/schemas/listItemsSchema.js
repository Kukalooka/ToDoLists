const listItems = `
  CREATE TABLE IF NOT EXISTS listItems (
      itemId VARCHAR(255) UNIQUE NOT NULL,
      itemName VARCHAR(255) NOT NULL,
      listId VARCHAR(255) NOT NULL,
      creationDate TIMESTAMP NOT NULL
  )
`;

module.exports = listItems;