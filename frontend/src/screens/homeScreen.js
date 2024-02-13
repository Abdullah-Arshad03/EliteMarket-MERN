import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Product from "../components/Product.js";
import { useGetProductsQuery } from "../slices/productApiSlice.js";
import { useState , useEffect} from "react";

const HomeScreen = () => {

  

  const { data , isLoading, error } = useGetProductsQuery();



  return (
    <>
      <Container>
        {isLoading ? (
          <>
         
            <h2>Loading...</h2>
          </>
        ) : error ? (
          <div>{error?.data?.message || error.error}</div>
        ) : (
          <>
            <h1 style={{ color: "#2F4F4F" }}>Lastest Products:</h1>

            <Row>
              {data.
              products.map((product) => (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  style={{ marginBottom: "20px" }}
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
