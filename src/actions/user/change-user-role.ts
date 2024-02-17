'use server';

import { revalidatePath } from 'next/cache';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const changeUserRole = async (userId: string, role: string) => {
  const session = await auth();

  if (session?.user.role !== 'admin') {
    return {
      ok: false,
      message: 'Debe de estar autenticado como admin',
    };
  }

  try {
    const newRole = role === 'admin' ? 'admin' : 'user';

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: newRole,
      },
    });

    revalidatePath('/admin/users');

    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      message: 'No se pudo actualizar el role, revisar logs',
    };
  }
};
