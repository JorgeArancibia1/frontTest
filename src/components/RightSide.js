import React from 'react'
import { Description } from './Description'
import { Dispatch } from './Dispatch'
import { Warranty } from './Warranty'

export const RightSide = ({ description, prices, warranties }) => {

  return (
    <div className="container-right d-flex flex-d-c px-2">
      <Description description={ description } prices={ prices } />
      <Dispatch />
      <Warranty warranties={ warranties } />
    </div>
  )
}
