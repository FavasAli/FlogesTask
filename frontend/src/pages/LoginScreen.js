import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import axios from "axios"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/')
    }
  }, [])
  
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      localStorage.setItem('token',data.token)
      if(data.token){
        navigate('/productlist')
      }
    } catch (error) {}
  }

  return (
    <Row>
      <Col lg={3}></Col>
      <Col lg={6} className="mt-5">
        {" "}
        <h1>Sign in</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>
      </Col>
      <Col lg={3}></Col>
    </Row>
  )
}

export default LoginScreen
