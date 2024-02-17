import { redirect } from 'next/navigation';

import { auth } from '@/auth.config';
import { Title } from '@/components';

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <div>
      <Title title="Perfil" />

      <pre>{JSON.stringify(session.user, null, 2)}</pre>

      <h3 className="mb-10 text-3xl">{session.user.role}</h3>
    </div>
  );
}
