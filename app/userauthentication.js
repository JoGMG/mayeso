const { dbConnection, getDB } = require('./dbconnector');
const bcrypt = require('bcrypt');

// user registration.
async function registerUser(email, password) {
    const db = getDB();
    const usersCollection = db.collection('users');

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    await usersCollection.insertOne({ email, password: hashedPassword });
}

// checks if a user exists with the given email and password
async function loginUser(email, password) {
    const db = getDB();
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });
    if (!user) {
        throw new Error('Invalid email');
    }

    // password auth
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    return user;
}

// Start the server and connect to the database
async function startServer() {
    await dbConnection();
    console.log('Database connected successfully');

    // Now you can use registerUser and loginUser functions
}

startServer();
