# TaskManagment
# To execute the project, please follow below instaruction

# clone the project
git clone https://github.com/shahnaz-16/TaskManagment.git

# Prerequisites to run the application
1. install postgres database
2. install visual studio code
3. install postman for testing

# Change your database connection details in com.techCorp/postgresQueries.js
# install and start the application using below commands
npm install express
npm install
node apiEndpoints.js

# By default the application starts with port 3000

# Below are the API Endpints for testing through postman
# Create task
POST http://localhost:3000/tasks
REQUEST BODY:
{
  "name": "My task 1",
  "status": "blocked"
}
# GET task
GET http://localhost:3000/tasks/1
RESPONSE:
[
    {
        "id": 1,
        "name": "My task 1",
        "status": "in progress"
    }
]

# UPDATE task
PUT http://localhost:3000/tasks/1
REQUEST BODY:
{
  "name": "My task 1 updated",
  "status": "updated"
}
RESPONSE:
Task modified with ID: 1

# GET all tasks
GET http://localhost:3000/tasks

# DELETE task
DELETE http://localhost:3000/tasks/1
RESPONSE BODY:
Task deleted with ID: 1

