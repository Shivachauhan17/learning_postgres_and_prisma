import { getClient } from "./utils";

async function rightJoin(){
    const client=await getClient()
    const query=`
        SELECT users.*,todos.*
        FROM users
        RIGHT JOIN todos
        ON users.id=todos.userid
    `
    const result=await client.query(query)
    console.log("result of the right join is:\n",result.rows)
    await client.end()
}

rightJoin()