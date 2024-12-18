// Header.jsx
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
const Header = () => {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="bg-gradient-to-r from-blue-50 to-green-50 shadow-md text-gray-800"
      >
        <Navbar.Brand to="https://flowbite-react.com">
          <img
            src="/vite.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <Link to="/">
            <h2 className="text-lg font-bold">
              <span className="text-blue-400">Elcrypt</span>
              <span className="text-green-400">IQ</span>
            </h2>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>
            <Link to="/team" active>
              Team
            </Link>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/" active>
            Home
          </Link>
          <Link to="/aes">AES</Link>
          <Link to="/rsa">RSA</Link>
          <Link to="/learn-more">Learn More</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
