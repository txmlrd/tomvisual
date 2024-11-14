import * as React from 'react';

import DashboardMenu from '@/components/admin/DashboardMenu';
import NavbarAdmin from '@/components/admin/NavbarAdmin';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
interface LayoutProps {
  children: React.ReactNode;
  seo: string;
  scrollTo?: (id: string) => void;
}

const AdminLayout: React.FC<LayoutProps> = ({
  children,
  seo,
  scrollTo = () => {},
}: LayoutProps) => {
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    router.push(path); // Navigasi tanpa reload
  };
  return (
    <main className='bg-[#09090B] min-h-screen'>
      <Seo templateTitle={seo} />
      <NavbarAdmin />
      <div className='flex flex-row'>
        <DashboardMenu onMenuClick={handleMenuClick} />
        <div className='flex w-full h-full text-white m-5'>{children}</div>
      </div>
    </main>
  );
};
export default AdminLayout;
