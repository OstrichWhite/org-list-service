## Installation

1. **MongoDB Setup:**

   - Ensure MongoDB is installed on your machine.
   - Update `sample.env` with your MongoDB connection details other details.
   - Rename `sample.env` to `.env`.

2. **Seed Data:**
   To seed data into the MongoDB database, run the following commands:

   ```bash
      $ node backend/seed-data/seedData.js --import
      # To delete seeded data
      $ node backend/seed-data/seedData.js --delete

   ```

3. **To start backend server:**

   ```bash
    $cd backend
    $npm i
    $npm start

   ```

4. **To start frontend server:**

   ```bash
    $cd frontend
    $npm i
    $npm start
   ```
