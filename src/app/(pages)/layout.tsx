'use client';
import ContentAnimation from '@/components/layouts/ContentAnimation';
// import Footer from '@/components/layouts/footer';

// import Overlay from '@/components/layouts/overlay';
// import ScrollToTop from '@/components/layouts/scroll-to-top';

import MainContainer from '@/components/layouts/MainContainer';
import Header from '@/components/layouts/Header';
import Portals from '@/components/layouts/Portals';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* BEGIN MAIN CONTAINER */}
      <div className="relative">
        {/* <Overlay />
        <ScrollToTop /> */}

        <MainContainer>
            {/* BEGIN TOP NAVBAR */}
            <Header />
            {/* END TOP NAVBAR */}
          <div className="main-content flex min-h-screen flex-col bg-black text-white">

            {/* BEGIN CONTENT AREA */}
            <ContentAnimation>{children}</ContentAnimation>
            {/* END CONTENT AREA */}

            {/* BEGIN FOOTER */}
            {/* <Footer /> */}
            {/* END FOOTER */}
            <Portals />
          </div>
        </MainContainer>
      </div>
    </>
  );
}
