'use client';

import type { User } from '@/interfaces';

import { changeUserRole } from '@/actions';

interface Props {
  users: User[];
}

export function UsersTable({ users }: Props) {
  return (
    <table className="min-w-full">
      <thead className="border-b bg-gray-200">
        <tr>
          <th
            className="px-6 py-4 text-left text-sm font-medium text-gray-900"
            scope="col"
          >
            Email
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
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
          >
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              {user.email}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
              {user.name}
            </td>
            <td className="flex items-center whitespace-nowrap  px-6 py-4 text-sm font-light text-gray-900">
              <select
                className="w-full p-2 text-sm text-gray-900"
                value={user.role}
                onChange={(e) => changeUserRole(user.id, e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
