import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import styles from './auth.module.scss';

interface IProps {
  children: React.ReactNode;
  heading: string | ReactNode;
  subheading: string | ReactNode;
}

const AuthenticationLayout: React.FC<IProps> = ({
  children,
  heading,
  subheading,
}) => {
  return (
    <div className={styles.layout}>
      <Container>
        <div className={styles.layout_inner}>
          <div className={styles.layout_wrapper}>
            <div className={styles.layout_heading}>
              <img src='/images/logo.svg' alt='' />
              <h4>{heading}</h4>
              <p>{subheading}</p>
            </div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthenticationLayout;
