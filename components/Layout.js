import { Container } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <CustomNavbar />
      </Container>
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
