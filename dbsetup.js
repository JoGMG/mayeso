const MongoClient = require('mongodb').MongoClient;
const { v4: uuidv4 } = require('uuid');
const Question = require('./models/question');
const Exam = require('./models/exam');

// Connection URL, DB, and User credentials
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mayeso_db';

// Question1 object creation
const id = uuidv4();
const author = "Regah John";
const question = "What is the capital of France?";
const options = ["Paris", "London", "Berlin", "Madrid"];
const answer = "Paris";
const questionObject = new Question(id, author, question, options, answer);

// Question2 object creation
const id2 = uuidv4();
const author2 = "Edmund Nees";
const question2 = "What is the capital of Australia?";
const options2 = ["Sydney", "Melbourne", "Canberra", "Adelaide"];
const answer2 = "Canberra";
const questionObject2 = new Question(id2, author2, question2, options2, answer2);

// Exam object creation
const examID = uuidv4();
const examAuthor = "Naomi Stone";
const examTitle = "Country & Capitals";
const examDuration = 60;
const examQuestions = [questionObject, questionObject2];
const pointsPerQuestion = 2;
const examObject = new Exam(
  examID,
  examAuthor,
  examTitle,
  examDuration,
  examQuestions,
  pointsPerQuestion
);

// Use connect method to connect to the server
MongoClient.connect(url)
  .then(client => {
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    // Create questions collection and insert document
    db.collection('questions').insertMany([questionObject, questionObject2])
      .then(() => {
        console.log('Document inserted into "questions" collection');
      })
      .catch(error => console.error('Failed to insert document', error));

    // Create exams collection and insert document
    db.collection('exams').insertOne(examObject)
      .then(() => {
        console.log('Document inserted into "exams" collection');
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
