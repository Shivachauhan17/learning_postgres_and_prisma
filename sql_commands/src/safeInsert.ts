import { getClient } from "./utils"

const insertData=async ()=>{
    const client=await getClient()
    const query=`
        INSERT INTO users (email,password) 
        VALUES ($1,$2)
        RETURNING *;
    `
    const values=["jazzy@gmail.com","Shiva@123"]
    const result=await client.query(query,values)
    console.log("result after insert:\n",result.rows[0])
    client.end()
}

insertData()