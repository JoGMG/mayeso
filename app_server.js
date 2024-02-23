const express = requestuire('express');
const bodyParser = requestuire('body-parser');
const MongoClient = requestuire('mongodb').MongoClient;
import { QuestionAnswerPair } from './questionanswer';

const app = express();
app.use(bodyParser.json());

let db;

// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017/mayesoDB', (error, client) => {
    if (error) {
        console.error(error);
        return;
    }
    db = client.db('mayesoDB');
});

// POST route to add a question
app.post('/questions', (request, response) => {
    const question = new QuestionAnswerPair(
        request.body.question,
        request.body.answer
    );
    db.collection('questions').insertOne(question, (error, result) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(result.ops[0]);
        }
    });
});

// GET route to retrieve all questions
app.get('/questions', (request, response) => {
    db.collection('questions').find().toArray((error, result) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(result);
        }
    });
});

// PUT route to update a question
app.put('/questions/:id', (request, response) => {
    const id = request.params.id;
    const newQuestion = new QuestionAnswerPair(
        request.body.question,
        request.body.answer
    );
    db.collection('questions').updateOne({ _id: id }, { $set: newQuestion }, (error, result) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(result);
        }
    });
});

// DELETE route to delete a question
app.delete('/questions/:id', (request, response) => {
    const id = request.params.id;
    db.collection('questions').deleteOne({ _id: id }, (error, result) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(result);
        }
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
