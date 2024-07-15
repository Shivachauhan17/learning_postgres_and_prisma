import { getClient } from "./utils";

async function fullJoin(){
    const client=await getClient()
    const query=`
        SELECT users.*,todos.*
        FROM users
        FULL JOIN todos
        ON users.id = todos.userid
    `
    const result=await client.query(query)
    console.log("the result of full join:\n",result.rows)
    client.end()
}

fullJoin()