const MongoClient = require('mongodb').MongoClient;

// MongoDB server URL and DB name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mayeso_db';
let db; // Hold DB connection

/**
 * Connect to the MongoDB server and set the `db` variable
 * to the connected database.
 * This function is asynchronous and returns a Promise.
 */
async function dbConnection () {
  try {
    const client = await MongoClient.connect(url);
    db = client.db(dbName);
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
