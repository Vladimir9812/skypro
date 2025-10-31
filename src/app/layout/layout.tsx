import type { JSX } from 'react';
import classes from './layout.module.css';
import { NavLink, Outlet } from 'react-router';
import Logo from '~/assets/logo.svg?react';
import { Button } from '@mui/material';

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
              Мои расходы
            </NavLink>
            <NavLink
              to='/analyze'
              end
              className={({ isActive }) => (isActive ? classes['link-active'] : classes.link)}
            >
              Анализ расходов
            </NavLink>
          </nav>
          <Button variant='text' className={classes['exit-btn']}>
            Выйти
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
