# final_project_backend_foodjurnal

Food Journal Service is an application that displays food data, food recipe data and also category data from recipes and displays nutritional data for each food and this application is made to make it easier for users/users to view food data and nutrition in food.
in this application you can display users from all data, display users from certain IDs, can add new user data, can delete user data, can view a list of all meals, can display food data based on id, users can see the entire list of recipes, users can view a list of recipes by id, users can change recipe data, users can delete recipe lists, users can view all nutritional data, users can view nutritional data by id, users can change nutritional data, users can delete nutritional data.

# The technology used is: :

- visual studio code
- node js
- mysql workbench
- express js
- postman
- sequeilize

# architecture diagram

this is architecture diagram of Food Jurnal service

![architecture diagram food jurnal](https://user-images.githubusercontent.com/116243607/214758060-64f544e7-d56b-44fd-aca9-88d947c3092b.png)


# An Entity Relational Diagram of the Food Jurnal service data model 

this is entity relationship that show relation from Food Jurnal service

![diagram ERD Food Jurnal service](https://user-images.githubusercontent.com/116243607/214758669-c35c9378-ee9d-4fb8-90b4-853c224668e8.png)




## RESTful API Endpoints Food Jurnal service
RESTful API Endpoints login :

| Method | Endpoint | Description | Requirement Parameter	|
| --- | --- | --- | --- |
| POST | `/login` | to enter the application | body **json**: `{name:string,email:string}`

Restful API Endpoints User :
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/user` | list of users | `empty`
| GET | `/user/{id}` | Get a user | `empty`
| PUT | `/user/{id}` | Update a user | body **json**: `{id:integer,name:string,password:string}` 
| DELETE | `/user/{id}` | Delete a user | `empty`
| POST | `/user` | Add user | body **json**: `{name:string,email:string,password:string}`

Restful API Endpoints Food :
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/food` | list of foods | `empty`
| GET | `/food/{id}` | Get a food | `empty`
| PUT | `/food/{id}` | Update a food | body **json**: `{id:integer,name:string}` 
| DELETE | `/food/{id}` | Delete a food | `empty`
| POST | `/food` | Add food | body **json**: `{name:string,ingredients:string,price:string}`

Restful API Endpoints Category
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/category` | list of categories | `empty`
| GET | `/category/{id}` | Gerecipet a category | `empty`
| PUT | `/category/{id}` | Update a category | body **json**: `{id:integer,name:string}` 
| DELETE | `/category/{id}` | Delete a category | `empty`
| POST | `/category` | Add category | body **json**: `{name:string}`

Restful API Endpoints Recipe
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/recipe` | list of recipes | `empty`
| GET | `/recipe/{id}` | Get a recipe | `empty`
| PUT | `/recipe/{id}` | Update a recipe | body **json**: `{id:integer,name:string,user_id:integer,category_id:integer}` 
| DELETE | `/recipe/{id}` | Delete a recipe | `empty`
| POST | `/recipe` | Add recipe | body **json**: `{recipe_name:string,ingredients:string,category_id:string,user_id:string}`

Restful API Endpoints Nutrisi
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/nutrisi` | list of nutrisies | `empty`
| GET | `/nutrisi/{id}` | Get a nutrisi | `empty`
| PUT | `/nutrisi/{id}` | Update a nutrisi | body **json**: `{id:integer,name:string,kalori:string,protein:string}` 
| DELETE | `/nutrisi/{id}` | Delete a nutrisi | `empty`
| POST | `/nutrisi` | Add nutrisi | body **json**: `{name:string,kalori:string}`


## postman aplication
use postman to using test rest api in here [**Click here**](https://github.com/FaisalNuridayat/final_project_backend_foodjurnal/blob/main/final%20project.postman_collection.json)

## This aplication Food Jurnal Deployment With Heroku
you can use link here https://project-food-jurnal.herokuapp.com/ to open aplication Food Jurnal in web server

## how to use this application, install it on your local computer:

```
$ npm init
$ npm install
$ install express 
```

