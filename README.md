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


# An Entity Relational Diagram of the merchant service data model 

this is entity relationship that show relation between merchant and product from merchant service

![entitty diagram merchant dan product](https://user-images.githubusercontent.com/116243607/212041559-035854e6-a2bf-459e-90df-8942825dce3c.jpg)




## RESTful API Endpoints merchant service
RESTful API Endpoints :
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/merchant` | list of merchants | `empty`
| GET | `/merchant/{id}` | Get a merchant | `empty`
| PUT | `/merchant/{id}` | Update a merchant | body **json**: `{name:string}` 
| DELETE | `/merchant/{id}` | Delete a merchant | `empty`
| POST | `/product` | Add product | body **json**: `{merchant_id:integer, product_name:string, quantity:string, price:string}`
| POST | `/merchant` | Add merchant | body **json**: `{name:string, email:string, password:string, address:string, phone_number:string}`
| GET | `/product` | Get products from a merchant service | `empty`
| GET | `/product/{id}` | Get a list spesific product service | `empty`
| PUT | `/product/{id}` | Update  product from a merchant service | body **json**: `{product_name:string, quantity:string, price:string}` 
| DELETE | `/product/{id}` | Delete a specific product from a merchant service | `empty`
| POST | `/login` | Login merchant service | body **json**: `{email:string, password:string}`
## how to use this application, install it on your local computer:

```
$ npm init
$ npm install
$ install express 
```

