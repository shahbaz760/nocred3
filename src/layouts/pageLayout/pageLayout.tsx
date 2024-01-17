import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: IProps) => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

export default PageLayout;
