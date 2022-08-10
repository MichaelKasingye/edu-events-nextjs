/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/edu-logo.png";
import styles from "../styles/Navbar.module.css"

const CustomNavbar = () => {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="edu logo" height="50px" width="50px" />
        </Navbar.Brand>
      </Container>
      <Nav id={styles.links}>
        <Nav.Link href="/enrollment">Enrollment</Nav.Link>
        <Nav.Link href="/events">Events</Nav.Link>
        <Nav.Link href="/learning">Learning</Nav.Link>
        <Nav.Link href="/linkages">Linkages</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
