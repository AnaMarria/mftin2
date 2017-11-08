# Express and sequelizejs 


## run the backend
```sh
    nodemon ./bin/www
```

after you setup the connection info for the database in src/config/config.js run
```sh
sequelize db:migrate
```
this will create the tables in your database.

for generatic models 
```sh 
sequelize model:create --name Todo --attributes title:string
sequelize model:create --name user --attributes username:string,password:string,email:string,photo:blob
sequelize model:create --name recipe --attributes title:string,description:string,rating:integer,duration:integer,difficulty:integer,photo:blob,videoLink:string
sequelize model:create --name userComment --attributes idUser:integer,idRecipe:integer,comment:string
``` 
more on the tutorial url
### Docs
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

