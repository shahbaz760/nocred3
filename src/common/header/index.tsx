import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';

interface IProps {
  noContainer?: boolean;
}

const Header = ({ noContainer }: IProps) => {
  return (
    <Container className={noContainer ? 'p-0' : ''}>
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
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
