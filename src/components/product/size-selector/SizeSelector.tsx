import type { Size } from '@/interfaces';

import clsx from 'clsx';

interface Props {
  selectedSize?: Size;
  availableSizes: Size[]; // ['SX', 'M', 'XL', 'XXL']

  onSizeChanged: (size: Size) => void;
}

export function SizeSelector({
  selectedSize,
  availableSizes,
  onSizeChanged,
}: Props) {
  return (
    <div className="my-5">
      <h3 className="mb-4 font-bold">Tallas disponibles</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx('mx-2 text-lg hover:underline', {
              underline: size === selectedSize,
            })}
            type="button"
            onClick={() => {
              onSizeChanged(size);
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
