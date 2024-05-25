import React, { useContext } from 'react'
import ProductTemplate from '../Templates/ProductTemplate'
import { AppContext } from '../../Context/AppContext'

export default function Lenses() {

    const {lenses} = useContext(AppContext);

  return (
    <div>
      <ProductTemplate title="Lenses" products = {lenses}/>
    </div>
  )
}
