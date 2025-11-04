# CS 312 Mini Project 3

## Technologies Used

- Node.js
- Express
- PostgreSQL
- EJS
- bcrypt
- dotenv

## How to Run the Project

1. **Install Dependencies:**

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

2. **Create a PostgreSQL Database:**

   Install PostgreSQL, you will need to create a new database. You can do this using the `createdb` command in your terminal:

   ```bash
   createdb -U postgres your_db_name
   ```

   Replace `your_db_name` with the name you want to give your database.

3. **Create a `.env` File:**

   Create an `.env` file in the root of the project and add the following content. You can use these default values for a local setup, but be sure to change the `SESSION_SECRET` or leave blank for a random one.
   ```
   DB_USER=postgres
   DB_HOST=localhost
   DB_DATABASE=your_db_name
   DB_PASSWORD=your_password
   DB_PORT=5432
   SESSION_SECRET=secret_key
   ```
   - `SESSION_SECRET`: This is a secret key used to sign the session ID cookie. In this project, if a `SESSION_SECRET` is not provided in the `.env` file, a new one is generated using `crypto.randomBytes(32).toString('hex')` every time the server starts. However, this will invalidate all existing sessions on each restart, so it is recommended to set a static secret in the `.env` file.

4. **Initialize the Database:**

   Run the `init.sql` script to create the necessary tables and insert some sample data.

   ```bash
   psql -U your_db_user -d your_db_name -f init.sql
   ```

5. **Start the Server:**

   Run the following command to start the application:

   ```bash
   node index.js
   ```

   The server will be running on `http://localhost:3000`.
