import React, { Fragment, ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    pageTitle: string;
    pageBodyClassName?: string;
    hideHeader?: boolean;
    children: ReactNode;
  }

function Layout(
    { 
    pageTitle, 
    pageBodyClassName, 
    hideHeader,
    children,  
}: LayoutProps) {

    useEffect(() => {
        if (pageBodyClassName) {
          const bodyClasses = pageBodyClassName.split(' ').filter(Boolean)
          bodyClasses.forEach(cls => document.body.classList.add(cls))
    
          return () => {
            bodyClasses.forEach(cls => document.body.classList.remove(cls))
          }
        }
      }, [pageBodyClassName])

    return (
        <>
             <title>{`Julien L.P. | ${pageTitle}`}</title>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;