'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { IoInformationOutline } from 'react-icons/io5';
import clsx from 'clsx';

import { authenticate } from '@/actions';

export function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === 'Success') {
      window.location.replace('/');
    }
  }, [state]);

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="mb-5 rounded border bg-gray-200 px-5 py-2"
        name="email"
        type="email"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="mb-5 rounded border bg-gray-200 px-5 py-2"
        name="password"
        type="password"
      />

      <div
        aria-atomic="true"
        aria-live="polite"
        className="flex h-8 items-end space-x-1"
      >
        {state === 'CredentialsSignin' && (
          <div className="mb-2 flex flex-row">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div>

      <LoginButton />

      {/* divisor line */}
      <div className="my-5 flex items-center">
        <div className="flex-1 border-t border-gray-500" />
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500" />
      </div>

      <Link className="btn-secondary text-center" href="/auth/new-account">
        Crear una nueva cuenta
      </Link>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx({
        'btn-primary': !pending,
        'btn-disabled': pending,
      })}
      disabled={pending}
      type="submit"
    >
      Ingresar
    </button>
  );
}
