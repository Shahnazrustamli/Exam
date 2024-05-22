import express from "express";
import "dotenv/config"
import router from "./src/router/productRouter.js"
import "./src/config/db.js"

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5001

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api/products", router)

app.listen(PORT, () => {
    console.log(`Connected server ${PORT}`)
})