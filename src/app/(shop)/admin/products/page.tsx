export const revalidate = 0;

import Link from 'next/link';

import { currencyFormat } from '@/utils';
import { Pagination, ProductImage, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function OrdersPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });

  return (
    <>
      <Title title="Mantenimiento de productos" />

      <div className="mb-5 flex justify-end">
        <Link className="btn-primary" href="/admin/product/new">
          Nuevo producto
        </Link>
      </div>

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-gray-200">
            <tr>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Imagen
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Titulo
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Precio
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Género
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Inventario
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Tallas
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  <Link href={`/product/${product.slug}`}>
                    <ProductImage
                      alt={product.title}
                      className="h-20 w-20 rounded object-cover"
                      height={80}
                      src={product.ProductImage[0]?.url}
                      width={80}
                    />
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  <Link
                    className="hover:underline"
                    href={`/admin/product/${product.slug}`}
                  >
                    {product.title}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6  py-4 text-sm font-bold text-gray-900">
                  {currencyFormat(product.price)}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {product.gender}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900">
                  {product.inStock}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900">
                  {product.sizes.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
