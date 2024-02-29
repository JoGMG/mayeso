const express = require('express');
const { dbConnection, getDB } = require('./dbconnector');
const { v4: uuidv4 } = require('uuid');
const Question = require('../models/question');
const Exam = require('../models/exam');

// Use port number from the PORT environment variable or 3000 if not specified
const port = process.env.PORT || 3000;

// Create an Express application and auto-parse JSON
const app = express();
app.use(express.json());

// Connecct to the database
dbConnection();

// GET route to retrieve all questions
app.get('/questions', (request, response) => {
  const db = getDB();
  db.collection('questions').find().toArray()
    .then(questions => {
      response.status(200).json(questions);
    })
    .catch(error => {
      console.error('Failed to retrieve documents', error);
      response.status(500).send('Failed to retrieve documents');
    });
});

// GET route to retrieve all exams
app.get('/exams', (request, response) => {
  const db = getDB();
  db.collection('exams').find().toArray()
    .then(questions => {
      response.status(200).json(questions);
    })
    .catch(error => {
      console.error('Failed to retrieve documents', error);
      response.status(500).send('Failed to retrieve documents');
    });
});

// GET route to retrieve a single question
app.get('/questions/:id', (request, response) => {
  const db = getDB();
  const id = request.params.id;
  db.collection('questions').find({ _id: id }).toArray()
    .then(questions => {
      response.status(200).json(questions);
    })
    .catch(error => {
      console.error('Failed to retrieve document', error);
      response.status(500).send('Failed to retrieve document');
    });
});

// GET route to retrieve a single exam
app.get('/exams/:id', (request, response) => {
  const db = getDB();
  const id = request.params.id;
  db.collection('exams').find({ _id: id }).toArray()
    .then(questions => {
      response.status(200).json(questions);
    })
    .catch(error => {
      console.error('Failed to retrieve document', error);
      response.status(500).send('Failed to retrieve document');
    });
});

// POST route to add a question
app.post('/questions', (request, response) => {
  const db = getDB();
  const question = new Question(
    uuidv4(),
    request.body.author,
    request.body.question,
    request.body.options,
    request.body.answer
  );
  db.collection('questions').insertOne(question)
    .then(() => {
      response.status(201).send('Document inserted into "questions" collection');
    })
    .catch(error => {
      console.error('Failed to insert document', error);
      response.status(500).send('Failed to insert document');
    });
});

// POST route to add an exam
app.post('/exams', (request, response) => {
  const db = getDB();
  const exam = new Exam(
    uuidv4(),
    request.body.author,
    request.body.title,
    request.body.duration,
    request.body.questions,
    request.body.pointsPerQuestion
  );
  db.collection('exams').insertOne(exam)
    .then(() => {
      response.status(201).send('Document inserted into "exams" collection');
    })
    .catch(error => {
      console.error('Failed to insert document', error);
      response.status(500).send('Failed to insert document');
    });
});

// PUT route to update a question
app.put('/questions/:id', (request, response) => {
  const db = getDB();
  const id = request.params.id;
  db.collection('questions').updateOne({ _id: id }, { $set: request.body })
    .then(() => {
      response.status(200).send('Document updated in "questions" collection');
    })
    .catch(error => {
      console.error('Failed to update document', error);
      response.status(500).send('Failed to update document');
    });
});

// PUT route to update an exam
app.put('/exams/:id', (request, response) => {
  const db = getDB();
  const id = request.params.id;
  db.collection('exams').updateOne({ _id: id }, { $set: request.body })
    .then(() => {
      response.status(200).send('Document updated in "exams" collection');
    })
    .catch(error => {
      console.error('Failed to update document', error);
      response.status(500).send('Failed to update document');
    });
});

// DELETE route to delete a question
app.delete('/questions/:id', (request, response) => {
  const db = getDB();
  const id = request.params.id;
  db.collection('questions').deleteOne({ _id: id })
    .then(() => {
      response.status(200).send('Document deleted in "questions" collection');
    })
    .catch(error => {
      console.error('Failed to delete document', error);
      response.status(500).send('Failed to delete document');
    });
});

// DELETE route to delete an exam
app.delete('/exams/:id', (request, response) => {
  const db = getDB();
  const id = request.params.id;
  db.collection('exams').deleteOne({ _id: id })
    .then(() => {
      response.status(200).send('Document deleted in "exams" collection');
    })
    .catch(error => {
      console.error('Failed to delete document', error);
      response.status(500).send('Failed to delete document');
    });
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
