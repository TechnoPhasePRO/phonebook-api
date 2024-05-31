# Phonebook API

This is a RESTful API for a phonebook application built with Node.js and Sequelize ORM.

## Features

- User registration and login process
- CRUD operations for user's contacts
- Search contacts by name or phone number
- Mark phone numbers as spam

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/TechnoPhasePRO/phonebook-api.git
   ```
2. Install dependencies:

    ```bash
    npm install
    ```
3. Set up environment variables:

    Create a .env file in the root directory and add the following variables:
    ```text
    PORT=3000
    JWT_SECRET=phonebook0001
    ```
4. Run the server:
    ```bash
    npm start
    ```

## API Endpoints

1. Authentication
    - POST /auth/register: Register a new user.
    ```json
    REQUEST BODY:
    {
    "name": "John Doesnt",
    "phone": "12345678900",
    "password": "password1213"
    }
    RESPONSE BODY:
    {
    "id": 1,
    "name": "John Doesnt",
    "phone": "12345678900",
    "password": "$2b$10$VNlG8EEhshUhObDVxx5XVOYHaHcCWchERKsa72zQyvsX53nNTT/ZK",
    "updatedAt": "2024-05-31T06:46:13.105Z",
    "createdAt": "2024-05-31T06:46:13.105Z"
    }
    ```
    - POST /auth/login: Log in with existing credentials.
    ```json
    REQUEST BODY:
    {
      "phone": "12345678900",
      "password": "password1213"
    }
    RESPONSE BODY:
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNzEzODAxOCwiZXhwIjoxNzE3MTQxNjE4fQ.be4HjulYrviEETE_NDo4QCJV3i33QXXeZYX0u-mMa6U"
    }
    ```

2. User Profile
    - GET /user/profile: Get user profile information. Add bearer token authorization to validate user.
    ```json
    RESPONSE BODY:
    {
    "id": 1,
    "name": "John Doesnt",
    "phone": "12345678900",
    "email": null,
    "password": "$2b$10$VNlG8EEhshUhObDVxx5XVOYHaHcCWchERKsa72zQyvsX53nNTT/ZK",
    "createdAt": "2024-05-31T06:46:13.105Z",
    "updatedAt": "2024-05-31T06:46:13.105Z",
    "contacts": []
    }
    ```

3. Contacts
    - GET /contacts: Get all contacts of the logged-in user. Add bearer token authorization to validate user.
    ```json
    RESPONSE BODY:
    [
        {
            "id": 1,
            "name": "Will Smith",
            "phone": "0987654321",
            "userId": 1,
            "createdAt": "2024-05-31T06:51:51.380Z",
            "updatedAt": "2024-05-31T06:51:51.380Z"
        }
    ]
    ```
    - GET /contacts/:id: Get a specific contact by ID. Add bearer token authorization to validate user.
    ```json
    RESPONSE BODY:
    {
        "id": 1,
        "name": "Will Smith",
        "phone": "0987654321",
        "userId": 1,
        "createdAt": "2024-05-31T06:51:51.380Z",
        "updatedAt": "2024-05-31T06:51:51.380Z"
    }
    ```
    - POST /contacts: Add a new contact for the logged-in user. Add bearer token authorization to validate user.
    ```json
    REQUEST BODY:
    {
    "name": "Will Smith",
    "phone": "0987654321"
    }
    RESPONSE BODY:
    {
        "id": 1,
        "name": "Will Smith",
        "phone": "0987654321",
        "userId": 1,
        "updatedAt": "2024-05-31T06:51:51.380Z",
        "createdAt": "2024-05-31T06:51:51.380Z"
    }
    ```
    - PUT /contacts/:id: Update a contact. Add bearer token authorization to validate user.
    ```json
    REQUEST BODY:
    {
        "name": "Will Smith Jr",
        "phone": "0987654321"
    }
    RESPONSE BODY:
    {
        "id": 1,
        "name": "Will Smith Jr",
        "phone": "0987654321",
        "userId": 1,
        "createdAt": "2024-05-31T06:51:51.380Z",
        "updatedAt": "2024-05-31T06:57:36.465Z"
    }
    ```
    - DELETE /contacts/:id: Delete a contact. Add bearer token authorization to validate user.
    ```json
    RESPONSE
    Status Code: 204 No Content
    ```

4. Search
    - GET /user/search/name/:name: Search contacts by name. Add bearer token authorization to validate user.
    ```json
    RESPONSE BODY:
    [
        {
            "id": 1,
            "name": "John Doesnt",
            "phone": "12345678900",
            "email": null,
            "password": "$2b$10$VNlG8EEhshUhObDVxx5XVOYHaHcCWchERKsa72zQyvsX53nNTT/ZK",
            "createdAt": "2024-05-31T06:46:13.105Z",
            "updatedAt": "2024-05-31T06:46:13.105Z",
            "contacts": [
                {
                    "id": 2,
                    "name": "Will Smith",
                    "phone": "0987654321",
                    "userId": 1,
                    "createdAt": "2024-05-31T07:01:34.542Z",
                    "updatedAt": "2024-05-31T07:01:34.542Z"
                }
            ]
        }
    ]
    ```
    - GET /user/search/phone/:phone: Search contacts by phone number. Add bearer token authorization to validate user.
    ```json
    RESPONSE BODY:
    [
        {
            "id": 2,
            "name": "Will Smith",
            "phone": "0987654321",
            "userId": 1,
            "createdAt": "2024-05-31T07:01:34.542Z",
            "updatedAt": "2024-05-31T07:01:34.542Z"
        }
    ]
    ```

5. Spam
    POST /spam: Mark a phone number as spam. Add bearer token authorization to validate user.
    ```json
    REQUEST BODY:
    {
      "phone": "0987654321"
    }
    RESPONSE BODY:
    {
        "id": 1,
        "phone": "0987654321",
        "userId": 1,
        "updatedAt": "2024-05-31T07:01:59.187Z",
        "createdAt": "2024-05-31T07:01:59.187Z"
    }
    ```

## License
This project is licensed under the MIT License