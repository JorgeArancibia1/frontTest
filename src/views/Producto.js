import React from 'react'
import { Description } from '../components/Description'
import { Dispatch } from '../components/Dispatch'
import { PrincipalImage } from '../components/PrincipalImage'
import { SideImages } from '../components/SideImages'
import { Warranty } from '../components/Warranty'

export const Producto = () => {
  return (
    <div>
      <SideImages />
      <PrincipalImage />
      <Description />
      <Dispatch />
      <Warranty />
    </div>
  )
}
