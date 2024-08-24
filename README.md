# Mini Peerfives API Setup Guide

## Tools used

1. NodeJS
2. Express
3. Postgres - Databaes
4. Sequelize - ORM
5. Postman - API testing and specification tool

## Clone the Repository

Clone the Mini Peerfives repository from GitHub:

```
git clone https://github.com/akcoolchamp/mini_peerfives
```

## Navigate to the Project Directory

Change to the root directory of the project:

```
cd mini_peerfives
```

## Install Dependencies

Install all required packages:

```
npm install --save
```

## Create Environment File

Create a `.dev.env` file in the root directory. This file will hold your development environment variables. Add the following values to the file:
`.dev.env`

```
# DB configs
DB_USER=<your_username>
DB_PASSWORD=<your_password>
DB_NAME=<your_db_name>
DB_HOST=<your_host>
DB_PORT=<your_port>

# Node environment
NODE_ENV=dev

# Server settings
PORT=<port>
```

Replace the placeholders (<your_username>, <your_password>, etc.) with your actual database and server configuration values.

### Start the Application

In the root directory, start the application with the following command:

```
npm run start
```

## Import API Specification into Postman

To interact with the API, import the API specification into Postman. You can usually find the API specification file (Api spec.postman_collection.json) in the root directory or related documentation.

1. Open Postman.
2. Click on Import in the top left corner.
3. Select the API specification file from your project directory and import it.

You can now use Postman to interact with the APIs defined in the specification.
