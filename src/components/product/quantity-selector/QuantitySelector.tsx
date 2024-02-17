'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;

  onQuantityChanged: (value: number) => void;
}

export function QuantitySelector({ quantity, onQuantityChanged }: Props) {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;

    onQuantityChanged(quantity + value);
  };

  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => {
          onValueChanged(-1);
        }}
      >
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="mx-3 w-20 rounded bg-gray-200 px-5 py-1 text-center">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => {
          onValueChanged(+1);
        }}
      >
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
}
