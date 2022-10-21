import express from "express"
import {
  getAllProducts,
  getAllDeliveryList,
  getOutOfStock,getAllStocks
} from "../controllers/productController.js"
const router = express.Router()

router.get("/", getAllProducts)
router.get("/deliverylist", getAllDeliveryList)
router.get("/outofstock", getOutOfStock)
router.get("/stocks", getAllStocks)

export default router
