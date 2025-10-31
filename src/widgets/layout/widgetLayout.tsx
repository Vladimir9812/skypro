import type { JSX } from 'react';
import classes from './widgetLayout.module.css';

type Props = {
  children: JSX.Element;
};

const WidgetLayout = ({ children }: Props): JSX.Element => {
  return <section className={classes.widget}>{children}</section>;
};

export { WidgetLayout };
