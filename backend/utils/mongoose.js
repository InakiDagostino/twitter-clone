import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB(){

    if(conn.isConnected) return

    const db = await connect("mongodb://127.0.0.1/twitterClone")
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
}

connection.on("connected", () => {
    console.log("connected to mongo")
})

connection.on("error", (err) => {
    console.log("FAILED to connect to mongo", err)
})