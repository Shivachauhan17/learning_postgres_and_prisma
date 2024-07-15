import { getClient } from "./utils";

async function createTables(){
    const client=await getClient()
    const createUserTable=`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `
    await client.query(createUserTable)

    const createtodoTable=`
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            userId INTEGER NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES users(id) ON  DELETE CASCADE
        );
    `
    await client.query(createtodoTable)
    console.log("table crreated please check")
    await client.end()
}

createTables()