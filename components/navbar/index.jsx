import React from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";

export default function NavbarMenu() {
  return (
    <>
      <Navbar
        sticky="top"
        expand="md"
        className="navbar-style"
        variant="dark"
        bg="dark"
        // style={{backgroundColor: 'black'}}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/assets/logo/logoTitle.png"
              alt="Logo.img"
              style={{ objectFit: "fill", width: "40px", height: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            style={{ width: "200px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                <img
                  src="/assets/logo/Janggala_transparan_square.png"
                  alt="Logo.img"
                  style={{ objectFit: "cover", width: "40px", height: "auto" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <NavDropdown className="mx-1" title="GALERI">
                  <NavDropdown.Item
                    href="/galeri/family"
                    className="navbar-item"
                  >
                    Foto Family
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/wedding"
                    className="navbar-item"
                  >
                    Foto Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/prewedding"
                    className="navbar-item"
                  >
                    Foto Prewedding
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/engagement"
                    className="navbar-item"
                  >
                    Foto Engagement
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/graduation"
                    className="navbar-item"
                  >
                    Foto Graduation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/maternity"
                    className="navbar-item"
                  >
                    Foto Maternity
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/new-born"
                    className="navbar-item"
                  >
                    Foto New Born
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/galeri/group"
                    className="navbar-item"
                  >
                    Foto Group
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-1" href="/kontak">
                  KONTAK
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
