const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const connectDB = require('./config/db')

app.use(cors())
app.use(express.json())

connectDB()

const userRouter = require('./routes/userRoutes')
app.use('/api/v1/auth', userRouter)

app.listen(port, ()=>{
    console.log(`Server Running on ${port}`)
})