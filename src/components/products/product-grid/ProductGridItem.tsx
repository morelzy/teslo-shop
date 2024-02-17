'use client';

import type { Product } from '@/interfaces';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  product: Product;
}

export function ProductGridItem({ product }: Props) {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="fade-in overflow-hidden rounded-md">
      <Link href={`/product/${product.slug}`}>
        <Image
          alt={product.title}
          className="w-full rounded object-cover"
          height={500}
          src={`/products/${displayImage}`}
          width={500}
          onMouseEnter={() => {
            setDisplayImage(product.images[1]);
          }}
          onMouseLeave={() => {
            setDisplayImage(product.images[0]);
          }}
        />
      </Link>

      <div className="flex flex-col p-4">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
}
