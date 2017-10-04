import React from 'react'
import {
  Col, Card, CardHeader, CardBlock,
  CardTitle, CardFooter, Table,
} from 'reactstrap'

const PricesItem = ({handleClick, price}) => {

  const {variant, claimLimit, potentialShortfall, pricePerYear, totalPrice} = price

  function processPrice (val) {
    return val.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Col key={variant} xs="12" sm="12" md="6" className="prices-item mb-4">
      <Card onClick={handleClick}>
        <CardHeader>
          <CardTitle>
            {variant}
          </CardTitle>
        </CardHeader>
        <CardBlock>
          <Table>
            <tbody>
            <tr>
              <td>Claim limit</td>
              <td>{processPrice(claimLimit.value)} {claimLimit.currency}</td>
            </tr>
            <tr>
              <td>Potential shortfall</td>
              <td>{processPrice(potentialShortfall.value)} {potentialShortfall.currency}</td>
            </tr>
            <tr>
              <td>Price per year</td>
              <td>{processPrice(pricePerYear.value)} {pricePerYear.currency}</td>
            </tr>
            </tbody>
          </Table>
        </CardBlock>
        <CardFooter><strong>Total
          price: {processPrice(totalPrice.value)} {totalPrice.currency}</strong></CardFooter>
      </Card>
    </Col>
  )
}

export default PricesItem