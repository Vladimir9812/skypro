import type { JSX } from 'react';
import classes from './layout.module.css';
import { Outlet } from 'react-router';

const Layout = (): JSX.Element => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <div className={classes['header-content']}></div>
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
