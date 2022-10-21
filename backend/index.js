import express from "express"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js"
import { createUser } from "./controllers/userController.js"
import {
  createDeliveryList,
  createProduct,
  createStock,getOutOfStockProducts
} from "./controllers/productController.js"
dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is Running...")
})

app.use("/api/products", productRoutes)
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
const PORT = process.env.PORT || 5000

const email = process.env.EMAIL || "admin@example.com"
const password = process.env.PASSWORD || "admin@123"
// Set up the port number
app.listen(PORT, async () => {
  await createUser({ email, password }),
    await createProduct(),
    await createDeliveryList(),
    await createStock(),
    await  getOutOfStockProducts()
  console.log(`Server Running  on  port number: ${PORT}`)
})
