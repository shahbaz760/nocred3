import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import styles from './authLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  heading: string | ReactNode;
  subheading: string | ReactNode;
  icon?: ReactNode;
}

const AuthenticationLayout: React.FC<IProps> = ({
  children,
  heading,
  subheading,
  icon,
}) => {
  return (
    <div className={styles.layout}>
      <Container>
        <div className={styles.layout_inner}>
          <div className={styles.layout_wrapper}>
            <div className={styles.layout_heading}>
              {icon ? (
                <div className={styles.topIcon}>{icon}</div>
              ) : (
                <img src='/images/logo.svg' alt='' />
              )}
              <h4>{heading}</h4>
              {typeof subheading === 'string' ? (
                <p>{subheading}</p>
              ) : (
                subheading
              )}
            </div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthenticationLayout;
