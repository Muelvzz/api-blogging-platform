import express from "express"
import { apiRouter } from "./routers/apiRoutes"
import "dotenv/config"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("", apiRouter)

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`[SERVER] Backend is running at http://localhost:${port}`)
  })
}

export default app