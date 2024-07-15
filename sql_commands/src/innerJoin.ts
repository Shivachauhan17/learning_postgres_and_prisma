import { getClient } from "./utils";

async function innerJoin(){
    const client=await getClient()
    const query=`
        SELECT users.*,todos.*
        FROM users
        INNER JOIN todos
        ON users.id=todos.userid
    `

    const result=await client.query(query)
    console.log("the result of the left join\n",result.rows)
    await client.end()
}

innerJoin()