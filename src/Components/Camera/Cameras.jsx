import React, { useContext } from 'react'
import ProductTemplate from '../Templates/ProductTemplate'
import { AppContext } from '../../Context/AppContext'

export default function Cameras() {

    const {cameras} = useContext(AppContext);

  return (
    <div>
      <ProductTemplate title = "Cameras" products = {cameras}/>
    </div>
  )
}
