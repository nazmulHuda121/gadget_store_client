import AddProduct from '@/components/AddProduct';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Page() {
  return (
    <ProtectedRoute>
      <AddProduct />
    </ProtectedRoute>
  );
}
