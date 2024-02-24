const MongoClient = require('mongodb').MongoClient;

// Connection URL, DB, and User credentials
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mayeso_db';

// Use connect method to connect to the server
MongoClient.connect(url)
  .then(client => {
    console.log("Connected successfully to server\n");

    const db = client.db(dbName);

    // Create collection and insert document
    const questionAnswer = {
      question: "What is the capital of France?",
      answer: "Paris"
    };
    db.collection('questions').insertOne(questionAnswer)
      .then(() => {
        console.log('Document inserted into "questions" collection');
      })
      .catch(error => console.error('Failed to insert document', error));

    // Use the listCollections method and toArray to get an array of collections
    db.listCollections().toArray()
      .then(collections => {
        console.log('Collections in mayeso_db database:');
        collections.forEach((collection) => {
          console.log(collection.name);
        });

        // Add a delay before closing the connection
        setTimeout(() => {
          client.close();
        }, 1500);
      })
      .catch(err => console.error('Failed to retrieve collections', err));
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
