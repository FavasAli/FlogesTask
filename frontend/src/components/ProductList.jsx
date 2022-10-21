import React, { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import axios from "axios"
import { Row,Col, } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const ProductList = () => {
  const [products, setProducts] = useState()
  const navigate=useNavigate()
  console.log("products", products)
  useEffect(() => {
    if(!localStorage.getItem('token')){
        navigate('/login')
      }
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/api/products", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      setProducts(data)
    } catch (error) {}
  }

  return (
    <>
      <Row>
        <Col lg={6}>
          <Row>
            
              <Link
                className="btn btn-dark my-3"
                to="/deliverylist"
                style={{ color: "white" }}
              >
                Delivery List
              </Link>
            
  
          </Row>
          <Row>
              <Link
                className="btn btn-danger my-3"
                to="/outofstock"
                style={{ color: "white" }}
              >
                Out of stock
              </Link>
            </Row>
          <Row>
              <Link
                className="btn btn-dark my-3"
                to="/stocks"
                style={{ color: "white" }}
              >
                stock list
              </Link>
            </Row>
        </Col>
        <Col lg={6}>
          {" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => {
                  return (
                    <tr>
                      <td>{item.product_id}</td>
                      <td>{item.product_name}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default ProductList
