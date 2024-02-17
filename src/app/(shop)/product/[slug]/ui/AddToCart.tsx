'use client';

import type { CartProduct, Product, Size } from '@/interfaces';

import { useState } from 'react';

import { QuantitySelector, SizeSelector } from '@/components';
import { useCartStore } from '@/store';

interface Props {
  product: Product;
}

export function AddToCart({ product }: Props) {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);

    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {posted && !size ? (
        <span className="fade-in mt-2 text-red-500">
          Debe de seleccionar una talla*
        </span>
      ) : null}

      {/* Selector de Tallas */}
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChanged={setSize}
      />

      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Button */}
      <button className="btn-primary my-5" type="button" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
}
