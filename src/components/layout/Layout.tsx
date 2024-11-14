import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';
import Seo from '@/components/Seo';

import useDialogStore from '@/store/useDialogStore';

import Footer from '@/pages/sandbox/landingpage/Footer';
import Navbar from '@/pages/sandbox/landingpage/Navbar';

interface LayoutProps {
  children: React.ReactNode;
  seo: string;
  scrollTo?: (id: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  seo,
  scrollTo = () => {},
}: LayoutProps) => {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <div>
      <Navbar scrollTo={scrollTo} />
      <Seo templateTitle={seo} />
      {children}
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
      <Footer />
    </div>
  );
};
export default Layout;
