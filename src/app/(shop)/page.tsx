export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <Title className="mb-2" subtitle="Todos los productos" title="Tienda" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
