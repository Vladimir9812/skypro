import type { JSX } from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '~/assets/logo.svg?react';
import { Button } from '@mui/material';
import { text } from '~/text.ts';
import classes from './layout.module.css';

const Layout = (): JSX.Element => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <div className={classes['header-content']}>
          <Logo />
          <nav className={classes.nav}>
            <NavLink
              to='/'
              end
              className={({ isActive }) => (isActive ? classes['link-active'] : classes.link)}
            >
              {text.header.myExpensesLink}
            </NavLink>
            <NavLink
              to='/analyze'
              end
              className={({ isActive }) => (isActive ? classes['link-active'] : classes.link)}
            >
              {text.header.analyzeExpensesLink}
            </NavLink>
          </nav>
          <Button variant='text' className={classes['exit-btn']}>
            {text.header.exitBtn}
          </Button>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes['main-content']}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
