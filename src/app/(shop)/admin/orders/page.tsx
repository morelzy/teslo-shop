export const revalidate = 0;

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoCardOutline } from 'react-icons/io5';

import { Pagination, Title } from '@/components';
import { getPaginatedOrders } from '@/actions';

export default async function OrdersPage() {
  const { ok, orders = [] } = await getPaginatedOrders();

  if (!ok) {
    redirect('/auth/login');
  }

  return (
    <>
      <Title title="Todas las orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-gray-200">
            <tr>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                #ID
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Nombre completo
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Estado
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                scope="col"
              >
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {order.id.split('-').at(-1)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center whitespace-nowrap  px-6 py-4 text-sm font-light text-gray-900">
                  {order.isPaid ? (
                    <>
                      <IoCardOutline className="text-green-800" />
                      <span className="mx-2 text-green-800">Pagada</span>
                    </>
                  ) : (
                    <>
                      <IoCardOutline className="text-red-800" />
                      <span className="mx-2 text-red-800">No Pagada</span>
                    </>
                  )}
                </td>
                <td className="px-6 text-sm font-light text-gray-900 ">
                  <Link
                    className="hover:underline"
                    href={`/orders/${order.id}`}
                  >
                    Ver orden
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={1} />
      </div>
    </>
  );
}
