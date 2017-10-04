import React from 'react'
import { Row } from 'reactstrap'
import PricesItem from './PricesItem'

const PricesList = ({prices, onClick}) => {

  function renderPrices () {
    return prices.map(price => <PricesItem key={price.variant} price={price} handleClick={onClick}/>)
  }

  return (
    <Row className="prices-list">
      {renderPrices()}
    </Row>
  )

}

export default PricesList