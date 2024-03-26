
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { AppContext } from '../App';
import { useContext } from 'react';

function NavScrollExample() {
    const {cart,isAuthenticated}=useContext(AppContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary py-3 shadow-sm ">
            <Container>
                <Navbar.Brand href="#" className='fw-bold fs-4'>ALLEN COLLECTION</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 mx-auto "
                        style={{ maxHeight: '100px',fontWeight:'bold'}}
                        navbarScroll
                    >
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Product</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                   {/* <div className='buttons'>
                   <Link to="/login" className='btn btn-outline-dark '>
                   <i className="fa-solid fa-right-to-bracket me-1 "></i>  Login</Link>
                   <Link to="/register" className='btn btn-outline-dark ms-2'>
                   <i className="fa-solid fa-user-plus me-1 "></i>
                    Register</Link>
                   <Link to="/cart" className='btn btn-outline-dark ms-2'>
                   <i className="fa-solid fa-cart-shopping me-1 "></i>
                    Cart {cart.length}</Link>
                   </div> */}

<div className='buttons'>
  {isAuthenticated ? (
    <>
      <Link to="/cart" className='btn btn-outline-dark ms-2'>
        <i className="fa-solid fa-cart-shopping me-1"></i> Cart {cart.length}
      </Link>
      <Link to="/" className='btn btn-outline-dark ms-2 '>
      <i className="fa-solid fa-right-from-bracket"></i> Log Out
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className='btn btn-outline-dark'>
        <i className="fa-solid fa-right-to-bracket me-1"></i> Login
      </Link>
      <Link to="/register" className='btn btn-outline-dark ms-2'>
        <i className="fa-solid fa-user-plus me-1"></i> Register
      </Link>
      <Link to="/cart" className='btn btn-outline-dark ms-2'>
        <i className="fa-solid fa-cart-shopping me-1"></i> Cart {cart.length}
      </Link>
    </>
  )}
</div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;