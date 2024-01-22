import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

function NavBarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Acerca',
      route: '/about',
    },
    {
      name: 'Habilidades',
      route: '/skills',
    },
    {
      name: 'Proyectos',
      route: '/projects',
    },
    {
      name: 'Contácteme',
      route: '/contact',
    },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      position="static"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem
          className={`${location.pathname === '/' ? 'text-blue-700 font-medium' : ''}`}
        >
          <Link to="/">Home</Link>
        </NavbarItem>
        <NavbarItem
          className={`${location.pathname === '/about' ? 'text-blue-700 font-medium' : ''}`}
        >
          <Link to="/about">Acerca</Link>
        </NavbarItem>
        <NavbarItem
          className={`${location.pathname === '/skills' ? 'text-blue-700 font-medium' : ''}`}
        >
          <Link to="/">Habilidades</Link>
        </NavbarItem>
        <NavbarItem
          className={`${location.pathname === '/projects' ? 'text-blue-700 font-medium' : ''}`}
        >
          <Link to="/">Proyectos</Link>
        </NavbarItem>
        <NavbarItem
          className={`${location.pathname === '/contact' ? 'text-blue-700 font-medium' : ''}`}
        >
          <Link to="/">Contácteme</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              to={item.route}
              className={`w-full ${location.pathname === item.route ? 'text-blue-700 font-medium' : ''}`}
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBarMenu;
