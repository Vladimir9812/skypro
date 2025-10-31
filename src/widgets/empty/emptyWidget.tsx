import type { JSX } from 'react';
import { WidgetLayout } from '~/widgets/layout/widgetLayout.tsx';
import classes from './emptyWidget.module.css';
import { text } from '~/text.ts';

const EmptyWidget = (): JSX.Element => {
  return (
    <WidgetLayout>
      <div className={classes.content}>{text.widget.empty}</div>
    </WidgetLayout>
  );
};

export { EmptyWidget };
