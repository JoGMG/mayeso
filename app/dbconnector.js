const MongoClient = require('mongodb').MongoClient;

// MongoDB server URL and DB name
const url = decodeURIComponent(process.env.DATABASE_URL);
let db; // Hold DB connection

if (!url) {
  console.error('Error: The DATABASE_URL environment variable is not set.');
  process.exit(1);
} else {
  console.log('Success: The DATABASE_URL environment variable is set.');
}

/**
 * Connect to the MongoDB server and set the `db` variable
 * to the connected database.
 * This function is asynchronous and returns a Promise.
 */
async function dbConnection () {
  try {
    const client = await MongoClient.connect(url);
    db = client.db();
    console.log('Connected successfully to server');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

/**
 * Get the current database connection.
 * @returns {Object} The current database connection.
 */
function getDB() {
  return db;
}

module.exports = { dbConnection, getDB };
