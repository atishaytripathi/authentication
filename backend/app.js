const mongoose = require("mongoose")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("Unable to connect to DB")
})

//Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Import routes
const userRoutes = require("./routes/user")

//Using routes
app.use('/api', userRoutes)

const port =  process.env.PORT || 8002


//Starting the server
app.listen(port, () => {
    console.log(`App is running at ${port}`)
})