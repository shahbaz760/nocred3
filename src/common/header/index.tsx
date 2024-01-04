import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './header.module.scss';

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
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/contact'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
