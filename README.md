# World sport Action

## Description

A Node.js project for world sport action task.

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:ranjanmanandhar/worldsportaction.git
   ```

2. Navigate to the project directory:
    ```
    cd wsa
    ```

3. Install the dependencies:
    ```
    npm install
    ```

## Usage

### To start the application use
    ```
    npm run dev
    ```

## Configuration
### Create a .env file in the root of the project directory and add the following environment variables:
    ```
    MYSQL_DB=sports
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=root
    MYSQL_PASSWORD=password
    ```

## Migration and Seeder Files
### Migration and seeder files are located inside the src/ folder. Ensure you run migrations to set up your database schema before starting the application.

### Running Migrations
### To run database migrations, use:

    ```
    npx sequelize-cli db:migrate    
    ```

## Running Seeders
### To seed the database, use:

    ```
    npx sequelize-cli db:seed:all
    ```
## Task 2
### End point : (http://localhost:4000/borrowable-players/1)

