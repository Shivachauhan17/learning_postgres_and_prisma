import {Client} from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const config = {
    user: "avnadmin",
    password: process.env.PASS,
    host: "pg-1e6596c2-shivanbd2019-d690.i.aivencloud.com",
    port: 15425,
    database: "test",
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.CA,
    },
};

export async function getClient(){
    const client=new Client(config)
    await client.connect()
    return client
}