import type { JSX } from 'react';
import { Typography } from '@mui/material';
import classes from './layoutPage.module.css';

type Props = {
  title: string;
  children: JSX.Element;
};

const LayoutPage = ({ title, children }: Props): JSX.Element => {
  return (
    <div className={classes.page}>
      <Typography variant='h1'>{title}</Typography>
      {children}
    </div>
  );
};

export { LayoutPage };
