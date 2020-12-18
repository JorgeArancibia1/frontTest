import React from 'react'
import { Description } from './Description'
import { Dispatch } from './Dispatch'
import { Warranty } from './Warranty'

export const RightSide = ({ description }) => {

  console.log("RS ", description)

  return (
    <div className="container-right d-flex flex-d-c">
      <Description data={description} />
      <Dispatch />
      <Warranty />
    </div>
  )
}
