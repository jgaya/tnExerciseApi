# tnExerciseApi

## To Run the Backend

Please configure the DB in the src/config/config.json
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "tn_exercise",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```  
Then just run  the following commands:
```
$ npm install
$ npm run migrate
$ npm run start
```

## Docker Comments

I try to dockerize the project but because I have an old computer and windows, I ran into several problems, that I did not have time to sole, anyway
most of the work to dockerize the project is there so I commited in the repo, even when it doesnt't work at least in windows.
