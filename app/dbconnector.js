const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mayeso_db';
let db;

async function dbConnection() {
  try {
    const client = await MongoClient.connect(url);
    db = client.db(dbName);
    console.log("Connected successfully to server");
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

const getDB = () => db;

module.exports = { dbConnection, getDB };
