import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  if (!slug || !slug.current  ||!name ||!price ||!image) {
    return null; // or return a fallback UI
  }
  

  return (
    
   
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Cr {price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
