const MongoClient = require('mongodb').MongoClient;
const { v4: uuidv4 } = require('uuid');
const Question = require('./models/question');
const Exam = require('./models/exam');

// Connection URL and DB name
const url = decodeURIComponent(process.env.DATABASE_URL);

if (!url) {
  console.error('Error: The DATABASE_URL environment variable is not set.');
  process.exit(1);
} else {
  console.log('Success: The DATABASE_URL environment variable is set.');
}

// Create two Question objects
const questionObject = new Question(
  uuidv4(),
  'Regah John',
  'What is the capital of France?',
  ['Paris', 'London', 'Berlin', 'Madrid'],
  'Paris'
);
const questionObject2 = new Question(
  uuidv4(),
  'Edmund Nees',
  'What is the capital of Australia?',
  ['Sydney', 'Melbourne', 'Canberra', 'Adelaide'],
  'Canberra'
);

// Create Exam object
const examObject = new Exam(
  uuidv4(),
  'Naomi Stone',
  'Country & Capitals',
  60,
  [questionObject, questionObject2],
  2
);

// Connect to the MongoDB server
MongoClient.connect(url)
  .then(client => {
    console.log('Connected successfully to server');
    const db = client.db();

    // Insert the Question objects into the 'questions' collection
    db.collection('questions').insertMany([questionObject, questionObject2])
      .then(() => {
        console.log('Document inserted into "questions" collection');
      })
      .catch(error => console.error('Failed to insert document', error));

    // Insert the Exam object into the 'exams' collection
    db.collection('exams').insertOne(examObject)
      .then(() => {
        console.log('Document inserted into "exams" collection');
      })
      .catch(error => console.error('Failed to insert document', error));

    // List all collections in the database
    db.listCollections().toArray()
      .then(collections => {
        console.log('Collections in mayeso_db database:');
        collections.forEach((collection) => {
          console.log(collection.name);
        });

        // Close the connection after a delay
        setTimeout(() => {
          client.close();
        }, 1500);
      })
      .catch(err => console.error('Failed to retrieve collections', err));
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
