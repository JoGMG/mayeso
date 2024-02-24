const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mayeso_db';
let db;

async function dbConnection() {
  try {
    const client = await MongoClient.connect(url);
    db = client.db(dbName);
    console.log("\nConnected successfully to server\n");
  } catch (error) {
    console.error('\nFailed to connect to MongoDB\n', error);
  }
}

const getDB = () => db;

module.exports = { dbConnection, getDB };
