conn = new Mongo();
db = conn.getDB("admin");

const DB_NAME = 'mayesoDB';
const USER_NAME = 'mayeso';
const USER_PASSWORD = 'mayesoPWD';

// check if the database exists
const databases = db.adminCommand('listDatabases');
let dbExists = false;
for(let i = 0; i < databases.databases.length; i++) {
    if(databases.databases[i].name === DB_NAME) {
        dbExists = true;
        break;
    }
}

if(!dbExists) {
    // if the database does not exist, create it
    db = conn.getDB(DB_NAME);

    // create a user for the database
    db.createUser({
        user: USER_NAME,
        pwd: USER_PASSWORD,
        roles: [{ role: 'dbOwner', db: DB_NAME }]
    });

    print('Database created and user added.');
} else {
    print('Database already exists.');
}
