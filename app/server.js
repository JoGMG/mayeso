const express = require('express');
const { dbConnection, getDB } = require('./dbconnector');
const QuestionAnswerPair = require('../questionanswer');

const app = express();
app.use(express.json());

dbConnection();
var db = getDB();

// GET route to retrieve all questions
app.get('/questions', (request, response) => {
  db.collection('questions').find().toArray()
    .then(questions => {
      response.status(200).json(questions);
    })
    .catch(error => {
      console.error('Failed to retrieve documents', error);
      response.status(500).send('Failed to retrieve documents');
    }); 
});

// POST route to add a question
app.post('/questions', (request, response) => {
  const question = new QuestionAnswerPair(
    request.body.question,
    request.body.answer
  );
  db.collection('questions').insertOne(question)
    .then(() => {
      response.status(201).send('Documents inserted into "questions" collection');
    })
    .catch(error => {
      console.error('Failed to insert documents', error);
      response.status(500).send('Failed to insert documents');
    });
});

// // PUT route to update a question
// app.put('/questions/:id', (request, response) => {
//   const id = request.params.id;
//   const newQuestion = new QuestionAnswerPair(
//     request.body.question,
//     request.body.answer
//   );
//   db.collection('questions').updateOne({ _id: id }, { $set: newQuestion }, (error, result) => {
//     if (error) {
//       response.status(500).send(error);
//     } else {
//       response.status(200).send(result);
//     }
//   });
// });

// // DELETE route to delete a question
// app.delete('/questions/:id', (request, response) => {
//   const id = request.params.id;
//   db.collection('questions').deleteOne({ _id: id }, (error, result) => {
//     if (error) {
//       response.status(500).send(error);
//     } else {
//       response.status(200).send(result);
//     }
//   });
// });

app.listen(3000, () => console.log('Server is running on port 3000'));
