import React, { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import axios from "axios"
import { Row,Col, } from "react-bootstrap"
import {  useNavigate } from "react-router-dom"

const OutOfStock = () => {
    const [products, setProducts] = useState()
    const navigate=useNavigate()
    console.log("products", products)
    useEffect(() => {
      if(!localStorage.getItem('token')){
          navigate('/login')
        }
        getOutOfStock()
    }, [])
  
    const getOutOfStock = async () => {
      try {
        const { data } = await axios.get("/api/products/outofstock", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        setProducts(data.products)
      } catch (error) {}
    }
  return (
    <>
    <h1>Out of Stock</h1>
      <Row>
        <Col lg={4}>
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

export default OutOfStock