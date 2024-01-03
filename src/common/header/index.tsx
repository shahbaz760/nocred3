import { Nav, Navbar } from 'react-bootstrap';
import styles from './header.module.scss';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className={styles.header}>
      <Navbar.Brand href='/' className={styles.logo}>
        <img src='/images/logo.svg' alt='' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse
        id='responsive-navbar-nav'
        className='justify-content-end'
      >
        <Nav className={styles.navLinks}>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/'>About</Nav.Link>
          <Nav.Link href='/'>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
