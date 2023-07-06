import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './routes'
import './database'
dotenv.config()

const PORT = 4000
const app = express()

// App config
app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`)
})
