import Product from "../model/productModel.js"
import Deliverylist from "../model/deliveryListModel.js"
import Stock from "../model/stockModel.js"

import asyncHandler from "express-async-handler"
import { Products, deliveryList, stock } from "../util/data.js"

const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.find()
  if (product.length == 0) {
    await Product.insertMany(Products)
  }
})
const createStock = asyncHandler(async (req, res) => {
  const product = await Stock.find()
  if (product.length == 0) {
    await Stock.insertMany(stock)
  }
})
const createDeliveryList = asyncHandler(async (req, res) => {
  const product = await Deliverylist.find()
  if (product.length == 0) {
    await Deliverylist.insertMany(deliveryList)
  }
})

// @dec   Fetching  all Product
// @route  GET /api/products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const data = await Product.find({})
    if (data) {
      res.status(200).send(data)
    } else {
      throw new Error("Product not found")
    }
  } catch (error) {
    console.log("error", error)
  }
})


// @dec   Fetching  all Delivery List
// @route  GET /api/products/deliverylist
const getAllDeliveryList = asyncHandler(async (req, res) => {
  try {
    const data = await Deliverylist.find({})
    if (data) {
      res.status(200).send(data)
    } else {
      throw new Error("Delivery List not found")
    }
  } catch (error) {
    console.log("error", error)
  }
})
// @dec   Fetching  all Delivery List
// @route  GET /api/products/stocks
const getAllStocks = asyncHandler(async (req, res) => {
  try {
    const data = await Stock.find({})
    if (data) {
      res.status(200).send(data)
    } else {
      throw new Error("Stocks List not found")
    }
  } catch (error) {
    console.log("error", error)
  }
})


// @dec   Fetching  all Delivery List
// @route  GET /api/products/deliverylist
const getOutOfStock = asyncHandler(async (req, res) => {
  try {
    let products = await getOutOfStockProducts()
    return res.status(200).json({ products })
    console.log("products--", products)
  } catch (error) {
    console.log("error", error)
  }
})

const getOutOfStockProducts = asyncHandler(async (req, res) => {
  let deliverylist = await Deliverylist.find()
  let stock = await Stock.find()
  let data = deliverylist.map((el) => {
    let exist = stock.find((dl) => dl.product_id == el.product_id)
    if (!exist && typeof exist != undefined) {
      return el.product_id
    }
  })
  const results = data.filter((element) => {
    return element !== undefined
  })

  const products = await Product.find({ product_id: { $in: results } })
  return products
})

export {
  createProduct,
  createStock,
  createDeliveryList,
  getOutOfStock,
  getOutOfStockProducts,
  getAllProducts,
  getAllDeliveryList,
  getAllStocks
}
