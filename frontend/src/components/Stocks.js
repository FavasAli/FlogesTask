import React, { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import axios from "axios"
import { Row,Col, } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
const Socks = () => {
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
        const { data } = await axios.get("/api/products/stocks", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        setProducts(data)
      } catch (error) {}
    }

  return (
    <>
    <h1>Stock List</h1>
      <Row>
        <Col lg={3}>
          {" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Id</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => {
                  return (
                    <tr>
                      <td>{item.product_id}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>  )
}

export default Socks