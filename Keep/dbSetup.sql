CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';

CREATE TABLE IF NOT EXISTS keeps(
  id INT AUTO_INCREMENT NOT NULL primary key,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name varchar(255),
  description varchar(255),
  img varchar(255),
  views INT,
  kept INT,
  shares INT,
  creatorId VARCHAR(255) NOT NULL,
  FOREIGN KEY (creatorId)
    REFERENCES accounts(id)
    ON DELETE CASCADE
) default charset utf8;

CREATE TABLE IF NOT EXISTS vaults(
  id INT AUTO_INCREMENT NOT NULL primary key,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name varchar(255),
  description varchar(255),
  isPrivate BOOLEAN,
  creatorId VARCHAR(255) NOT NULL,
  FOREIGN KEY (creatorId)
    REFERENCES accounts(id)
    ON DELETE CASCADE
) default charset utf8;

CREATE TABLE IF NOT EXISTS vaultkeeps(
  id INT AUTO_INCREMENT NOT NULL primary key,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  creatorId VARCHAR(255) NOT NULL,
  vaultId INT NOT NULL,
  keepId INT NOT NULL,
  FOREIGN KEY (creatorId)
    REFERENCES accounts(id)
    ON DELETE CASCADE,
  FOREIGN KEY (vaultId)
    REFERENCES vaults(id)
    ON DELETE CASCADE,
  FOREIGN KEY (keepId)
    REFERENCES keeps(id)
    ON DELETE CASCADE
) default charset utf8;



