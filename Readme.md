# Nodejs api with Sequelize

Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, Snowflake, Oracle DB and Db2 for IBM i. It features solid transaction support, relations, eager and lazy loading, read replication and more.

Would you like to contribute? Read our contribution guidelines to know more. There are many ways to help! 😃

## Installation
```sh
npm install --save sequelize
npm install --save pg pg-hstore # PostgresSQL
npm install - g sequelize-cli
npx sequelize init
    config: a folder that contains config file
    migrations: a folder that holds all migration files
    models: a folder that contains all models for the project
    seeders: a folder that holds all the seed files

Create database
    sequelize db:create

npx sequelize-cli model:generate --name User --attributes id:integer,userName:string,password:string,firstName:string,lastName:string,role:string  

npx sequelize-cli db:migrate


npx sequelize-cli seed:generate --name demo-user 

npx sequelize-cli db:seed:all
```



#� �p�n�o�d�e�j�s�
�
�
