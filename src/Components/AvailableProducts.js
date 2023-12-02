import React, { useContext } from 'react'
import Product from './Product'
import { Row, Col } from 'react-bootstrap'
import CartContext from '../Store/cart-context'

const AvailableProducts = () => {
    const cartCtx = useContext(CartContext)

    return (
      <>
       <div className="product-container row justify-content-center">
            <Row
              xs={1}
              sm={1}
              md={2}
              lg={2}
              xl={2}
              className="justify-content-center"
            >
              {cartCtx.availableItems.map((product, index) => (
                <Col key={index} className="col-12 mb-3">
                  <div className="d-flex justify-content-center">
                    <Product product={product} index={index} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
      </>
    )
  }
  
  export default AvailableProducts