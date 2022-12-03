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



 