import * as React from 'react';

import DashboardMenu from '@/components/admin/DashboardMenu';
import NavbarAdmin from '@/components/admin/NavbarAdmin';
import Seo from '@/components/Seo';

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
  return (
    <main className='bg-[#09090B]'>
      <Seo templateTitle={seo} />
      <NavbarAdmin />
      <div className='flex flex-row'>
        <DashboardMenu />
        {children}
      </div>
    </main>
  );
};
export default AdminLayout;
