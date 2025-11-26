'use client';
import { AuthContext } from '@/AuthProvider/AuthContext';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import Loading from './Loading';

export default function ProtectedRoute({ children }) {
  const { user, loading } = use(AuthContext);
  const router = useRouter();

  if (loading) {
    return (
      <p className="text-center">
        <Loading />
      </p>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return children;
}
