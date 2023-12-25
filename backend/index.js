import express,{ json } from "express"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()
app.use(json())
app.use(cookieParser());
app.disable('x-powered-by')
/*app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));*/

dotenv.config()

const PORT = Number(process.env.PORT)

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})