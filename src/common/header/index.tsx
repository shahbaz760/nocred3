import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './header.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface IProps {
  noContainer?: boolean;
}
interface LinkProps {
  to: string;
  children: ReactNode;
}

const LinkRouters = ({ to, children }: LinkProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  return pathname === to ? (
    // <></>
    <NavLink to={to}>{children}</NavLink>
  ) : (
    <NavLink to={to}>{children}</NavLink>
  );
};

const Header = ({ noContainer }: IProps) => {
  return (
    <Container className={noContainer ? 'p-0' : ''}>
      <Navbar collapseOnSelect expand='lg' className={styles.header}>
        <Navbar.Brand href='/' className={styles.logo}>
          <img src='/images/logo.svg' alt='' className={styles.desktop_img} />
          <img src='/icons/icon.svg' alt='' className={styles.mobile_img} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav className={styles.navLinks}>
            <LinkRouters to='/'>Home</LinkRouters>
            <LinkRouters to='/about'>About</LinkRouters>
            <LinkRouters to='/contact'>Contact Us</LinkRouters>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
